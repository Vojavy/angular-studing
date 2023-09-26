import { Injectable } from '@angular/core';
import { PersonalData } from './PersonalData';
import { Expression } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AccountManagmentService {
  private _admin = new PersonalData('Anrdey', 'str', 'admin', 'admin', undefined);
  private _accountsDB: Array<PersonalData> = [this._admin];
  constructor() { }
  private _actualUser:PersonalData | undefined;
  addToAccountsBase(account: PersonalData) {
    if (account.isValid())
      this._accountsDB.push(account);
  }

  private findInAccountsListByLogin(login: string): PersonalData | undefined {
    return this._accountsDB.find(account => account.login === login);
  }

  private isPasswordCorrect(login: string, password: string): boolean {
    return this.findInAccountsListByLogin(login)?.password === password;
  }

  setActualUser(login: string, password: string) {
    if (!this.findInAccountsListByLogin(login)) {
      console.error('no such account');
      return;
    }
    if (!this.isPasswordCorrect(login, password)){
      console.error('wrong password');
      return;
    }
    this._actualUser = this.findInAccountsListByLogin(login);
  }

  getActualUser(): PersonalData | undefined{
    if (!this._actualUser)
      return undefined
    return this._actualUser
  }

  //debug
  getDB(){
    return this._accountsDB;
  }
}
