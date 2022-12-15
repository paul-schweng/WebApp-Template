import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {NB_AUTH_OPTIONS, NbAuthService, NbRegisterComponent} from "@nebular/auth";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged, map, startWith, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {addErrorFormControl, removeErrorFormControl} from "../../../helper/add-error-form-control";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent implements OnInit {

  constructor(service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) options = {},
              cd: ChangeDetectorRef,
              router: Router,
              private authService: AuthenticationService) {
    super(service, options, cd, router);
  }

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    username: new FormControl('', [Validators.pattern(/^[a-z0-9.\-_]+$/), Validators.pattern(/^(?!.*[._\-]{2}).+$/)]),
    password: new FormControl(),
    confPassword: new FormControl(),
  });

  get name() {
    return this.formGroup.get('name')
  }

  get username() {
    return this.formGroup.get('username')
  }

  get password() {
    return this.formGroup.get('password')
  }

  get confPassword() {
    return this.formGroup.get('confPassword')
  }

  ngOnInit(): void {
    this.formGroup.controls['name'].valueChanges.subscribe(value => this.user.name = value);

    this.formGroup.controls['username'].valueChanges.pipe(
      startWith(''),
      map(username => username.toLowerCase().trim()),
      tap(username => this.user.username = username),
      tap(username => this.formGroup.controls['username'].setValue(username, {emitEvent: false})),
      tap(u => console.log(u)),
      debounceTime(300),
      distinctUntilChanged(),
      tap(username =>
        this.authService.isUsernameAvailable(username)
          ?.then(available => {
            available ? removeErrorFormControl(this.username, 'unavailable') :
              addErrorFormControl(this.username, {unavailable: true});
          })
          .catch(err => console.log(err))
      ),

    ).subscribe(a => console.log(a));
  }

}
