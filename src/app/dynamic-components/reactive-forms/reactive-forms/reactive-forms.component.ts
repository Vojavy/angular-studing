import { AccountManagmentService } from './account-managment.service';
import { Component } from '@angular/core';
import { Module } from '../../Module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalData } from './PersonalData';
import { CommonModule } from '@angular/common';

function isNumber(control: FormControl): boolean {
  return /\d/.test(control.value);
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})


export class ReactiveFormsComponent extends Module {

  isShowLoginMenu = false;
  isShowRegisterMenu = false;

  message: string = "Here will be message!";


  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  registerForm: FormGroup;

  acdb:PersonalData[]=this.acman.getDB();

  constructor(private acman: AccountManagmentService, fb: FormBuilder) {
    super("Reactive forms", "RF", "Reactive Forms show", ReactiveFormsComponent);
    this.registerForm = fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.minLength(3)],
      adress: fb.group({
        city: [''],
        street: [''],
        building: ['', isNumber]
      })
    })
  }

  login() {
    if (this.loginForm.value.login && this.loginForm.value.password) {
      this.acman.setActualUser(this.loginForm.value.login, this.loginForm.value.password);
      this.message = this.acman.getActualUser() ? `ok, actual user now is ${this.acman.getActualUser()}` : 'no user';
    }
  }

  register() {
    if (this.registerForm.valid) {
      this.acman.addToAccountsBase(new PersonalData(this.registerForm.value.name,
        this.registerForm.value.surname,
        this.registerForm.value.login,
        this.registerForm.value.password,
        this.registerForm.value.address))
    }
  }

  windowLoginShow() {
    this.isShowLoginMenu = true;
    this.isShowRegisterMenu = false;
  }

  windowRegisterShow() {
    this.isShowRegisterMenu = true;
    this.isShowLoginMenu = false;
  }
}
