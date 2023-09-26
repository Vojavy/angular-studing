import { FormsGeneratorService } from './forms-generator.service';
import { Component, EventEmitter, Injector, Input, OnInit, Output, Type } from '@angular/core';
import { Module } from '../Module';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InputType, InputsMetaService } from './inputs/inputs-meta.service';

interface DataItem {
  name: string;
  id: number;
}

@Component({
  selector: 'app-forms-generator',
  templateUrl: './forms-generator.component.html',
  styleUrls: ['./forms-generator.component.css']
})
export class FormsGeneratorComponent extends Module implements OnInit {
  formModules: Type<any> | null = null;
  componentInjector: Injector = Injector.create({
    providers: [{ provide: 'form', useValue: null }]
  });

  parsedJson: any;
  generatedGroup = new FormGroup('');
  jsonsList = new Array<any>;
  nextId = 1;
  private selectedJson: any;
  private inputsMetaService = new InputsMetaService ;

  constructor(private formsGeneratorServise: FormsGeneratorService) {
    super("Parse json", "PJ", "Parser of jsons", FormsGeneratorComponent);
  }

  ngOnInit() {
    //здесь создается list view из количества json 
    const files = this.formsGeneratorServise.getJsonsListFromServer();
    files.forEach((element) => {
      if (element.hasOwnProperty('name') && element.hasOwnProperty('file')) {
        this.addToJSONDropDown(element.name, element.file);
      }
    });
  }


  addToJSONDropDown(name: string, json: any) {
    // Добавление элемента в list с уникальным id
    const id = this.nextId++;
    this.jsonsList.push({ id, name, json });
  }

  handleItemSelected(item: DataItem) {
    // Найти объект в массиве jsonList по имени
    this.selectedJson = this.jsonsList.find(json => json.id === item.id);


    if (this.selectedJson) {
      // Если объект был найден, передаем его в parseJson для парсинга
      this.parsedJson = this.formsGeneratorServise.parseJson(this.selectedJson.json);
      // this.parsedJson.forEach(element => {
      //   switch (element.type){
      //     case InputType.TEXT:
      //       this.formGroup.addControl('text',this.formsGeneratorServise.createTextInputForm(element.key, element.value, true, this.inputsMetaService));
      //   }
      // });
    } else {
      // Если объект не был найден, this.parsedJson в null или другое значение по умолчанию
      this.parsedJson = null;
    }
  }


  onSubmit(){

  }
}
