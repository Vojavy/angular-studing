import { FormControl } from '@angular/forms';
import { InputType, InputsMetaService } from './../inputs-meta.service';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnChanges{
  @Input() inputName:string = "";
  @Input() label: string = "";
  @Input() isRequired: boolean = false;
  @Input() type: InputType = InputType.TEXT;

  validTypes: string[] = ['text', 'email', 'number'];
  formControl = new FormControl(this.inputName);

  constructor(inputMeta : InputsMetaService){
    inputMeta.setMetaData(this.label, this.inputName, this.isRequired, this.type);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] && !this.validTypes.includes(this.type)) 
      this.type = InputType.TEXT;
  }

  get formControler(){
    return this.formControl;
  }

}
