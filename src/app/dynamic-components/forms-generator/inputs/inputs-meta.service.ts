import { Injectable, InjectionToken, Type } from '@angular/core';

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
  OBJECT = 'object',
  MAIL = 'mail'
}

export const INJECTABLE_META_TOKEN = new InjectionToken<any>('injectableMetaToken');
@Injectable({
  providedIn: 'root'
})
export class InputsMetaService {
  private _metaData: Map<string, { label: string, isRequired: boolean, inputType: InputType }> = new Map();

  constructor() { }

  hasMeta(inputName: string): boolean {
    return this._metaData.has(inputName);
  }

  getMeta(inputName: string): { label: string, isRequired: boolean, inputType: InputType } | undefined {
    return this._metaData.get(inputName);
  }

  setMetaData(inputName: string, label: string, isRequired: boolean, inputType: InputType): void {
    this._metaData.set(inputName, { label, isRequired, inputType });
  }
}
