import { Component } from '@angular/core';
import { Module } from '../dynamic-components/Module';
import { ModuleService } from '../dynamic-components/module.service';
@Component({
  selector: 'app-greetings-page',
  templateUrl: './greetings-page.component.html',
  styleUrls: ['./greetings-page.component.css']
})
export class GreetingsPageComponent {
  modules: Module[];
  constructor(private moduleServise: ModuleService){
    this.modules= this.moduleServise.modules;
  }
}
