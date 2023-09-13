import { Injectable } from '@angular/core';
import { CaesarCodeComponent } from './caesar-code/caesar-code.component';
import { ChiffreDeVigenereComponent } from './chiffre-de-vigenere/chiffre-de-vigenere.component';
import { Module } from './Module';
import { FormsGeneratorComponent } from './forms-generator/forms-generator.component';
import { FormsGeneratorService } from './forms-generator/forms-generator.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private _modules: Module[] = [
    new CaesarCodeComponent(), // Create an instance of CaesarCodeComponent
    new ChiffreDeVigenereComponent(),
    new ChiffreDeVigenereComponent(),  // Create an instance of ChiffreDeVigenereComponent
    new FormsGeneratorComponent(new FormsGeneratorService)
  ];
  constructor() { };
  
  get modules(): Module[]{
    return this._modules;
  }

  getModuleByShortName(shortName: string){
    return this._modules.find(module => module.shortName === shortName);
  }
}
