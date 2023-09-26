import { Injectable } from '@angular/core';
import { CaesarCodeComponent } from './caesar-code/caesar-code.component';
import { ChiffreDeVigenereComponent } from './chiffre-de-vigenere/chiffre-de-vigenere.component';
import { Module } from './Module';
import { FormsGeneratorComponent } from './forms-generator/forms-generator.component';
import { FormsGeneratorService } from './forms-generator/forms-generator.service';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms/reactive-forms.component';
import { AccountManagmentService } from './reactive-forms/reactive-forms/account-managment.service';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private _modules: Module[] = [
    new CaesarCodeComponent(), 
    new ChiffreDeVigenereComponent(),
    new FormsGeneratorComponent(new FormsGeneratorService),
    new ReactiveFormsComponent(new AccountManagmentService, new FormBuilder)
  ];
  constructor() { };
  
  get modules(): Module[]{
    return this._modules;
  }

  getModuleByShortName(shortName: string){
    return this._modules.find(module => module.shortName === shortName);
  }
}
