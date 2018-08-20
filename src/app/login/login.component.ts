import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { regEx } from '../services/utils/regEx';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor(private formbuilder: FormBuilder) {

    this.loginForm = formbuilder.group({
      userEmail: new FormControl('', Validators.compose([Validators.required,
      Validators.pattern(regEx.email)])),
      password: new FormControl('', Validators.required),
    });

    this.forgotPasswordForm = formbuilder.group({
      userEmail: new FormControl('', Validators.compose([Validators.required,
      Validators.pattern(regEx.email)]))
    });

  }

  ngOnInit() {
  }

  forgotPasswordModal() {
    this.forgotPasswordForm.reset();
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  userLogin(logData: any) {
    console.log(logData);
  }

}
