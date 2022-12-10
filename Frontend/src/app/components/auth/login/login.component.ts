import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {IAmService} from "../../../services/i-am.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  isBusy: boolean = false;
  credentials = {
    username: "", password: ""
  }

  wrongCredentials: boolean = false;

  formGroup: FormGroup = new FormGroup({
    username: new FormControl(''),
  });

  constructor(private readonly authService: AuthenticationService,
              private readonly router: Router,
              private readonly iAmService: IAmService) {
  }


  loginClicked(){
    this.isBusy = true;
    this.wrongCredentials = false;

    this.authService.login(this.credentials)
      .then((res) => {
        this.router.navigateByUrl('/')
      })
      .catch(() => {
        this.wrongCredentials = true;
      })
      .finally(() => this.isBusy = false);
  }

  ngOnInit(): void {
    this.formGroup.controls['username'].valueChanges.subscribe(value => this.credentials.username = value);
  }

}
