import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputsMetaService {
  private _label?: string;
  private _isNecessarily?: boolean;
  private _fieldName?: string;

  setMetaData(fieldName: string, label: string, isNecessarily: boolean) {
    this._fieldName = fieldName;
    this._label = label;
    this._isNecessarily = isNecessarily;
  }

  get label(): string {
    return this._label || "";
  }

  get isNecessarily(): boolean {
    return this._isNecessarily || false; // Вернет false, если _isNecessarily равно null или undefined
  }

  get fieldName(): string {
    return this._fieldName || "";
  }
}


