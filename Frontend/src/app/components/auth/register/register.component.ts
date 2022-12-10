import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";
import {RegisterUser} from "../../../models/registerUser";
import {Router} from "@angular/router";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  OperatorFunction, startWith,
  switchMap,
  tap
} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  isBusy: boolean = false;
  userAvailable: boolean = true;
  user: RegisterUser = {
    name: "", password: "", username: ""
  };

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    username: new FormControl('', [Validators.pattern(/^[a-z0-9.\-_]+$/), Validators.pattern(/^(?!.*[._\-]{2}).+$/)]),
  });

  pwdRegex = {
      name: 'min. 8 Zeichen',
      regex: '^.{8,}$'
    };


  constructor(private readonly authService: AuthenticationService,
              private readonly router: Router) {
  }


  isInvalid() {
    return this.formGroup.controls['name'].invalid ||
      this.formGroup.controls['username'].invalid;
  }


  registerClicked() {

    this.isBusy = true;

    this.authService.register(this.user)
      .then((res) => {
        this.authService.login({username: this.user.username, password: this.user.password})
          .then(() =>
              this.router.navigateByUrl('/')
          )
      })
      .finally(() => this.isBusy = false);
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
      switchMap((username) =>
        this.authService.isUsernameAvailable(username)
          .then(available => this.userAvailable = !!available)
          .catch(err => console.log(err))
      )
    ).subscribe(a => console.log(a));
  }



}
