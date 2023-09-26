import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType, InputsMetaService } from '../inputs-meta.service';
import { FormControl } from '@angular/forms';

interface DataItem {
  name: string;
  id: number;
}

@Component({
  selector: 'app-drop-down-input',
  templateUrl: './drop-down-input.component.html',
  styleUrls: ['./drop-down-input.component.css']
})

export class DropDownInputComponent {
  @Input() items: DataItem[] = [];
  @Output() itemSelected = new EventEmitter<DataItem>();
  @Input() inputName:string = "";
  @Input() label: string = "";
  @Input() isRequired: boolean = false;

  private _items: DataItem[] = [];
  private _nextId: number = 1;
  selectedOption: DataItem = { name: '', id: 0 };
  formControl = new FormControl(this.inputName);

  constructor(private inputMeta: InputsMetaService) {
    if (this.selectedOption) {
      this.inputMeta.setMetaData(this.inputName, this.label, this.isRequired, InputType.OBJECT);
    }
  }

  

  onSelect() {
    this.itemSelected.emit(this.selectedOption);
  }
}

