import { FormsGeneratorService } from './forms-generator.service';
import { Component, OnInit } from '@angular/core';
import { Module } from '../Module';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-generator',
  templateUrl: './forms-generator.component.html',
  styleUrls: ['./forms-generator.component.css']
})
export class FormsGeneratorComponent extends Module implements OnInit{
  generatedGroup = new FormGroup('');
  jsonList = new Array<any>;

  constructor(private formsGeneratorServise: FormsGeneratorService){
    super("Forms generator", "FG", "Example of generating forms from json", FormsGeneratorComponent);
  }
  
  ngOnInit(){
    //здесь создается list view из количества json 
    this.jsonList = this.formsGeneratorServise.getJsonsListFromServer();
    this.jsonList.forEach(element => {
     //this.addToJSONListView();//решить передачу имени
    });
  }

  generate(){
    //this.formsGeneratorServise.parseJson();//доделать парсинг 
  }

  addToJSONListView(name: string, id:number){
    //доделать обработку и добавление в list
  }

}
