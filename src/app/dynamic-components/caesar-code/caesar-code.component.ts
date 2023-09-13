import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Module } from '../Module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-caesar-code',
  templateUrl: './caesar-code.component.html',
  styleUrls: ['./caesar-code.component.css']
})
export class CaesarCodeComponent extends Module {
  text = "Caessar is here!";
  shift = 2;
  newText = CaesarCodeComponent.encrypt(this.text, this.shift);
  isEncrypting: boolean = true;

  constructor() {
    super("Casesar code", "CC", "Casesare code module", CaesarCodeComponent);
  }

  encryptText(){
    this.newText = CaesarCodeComponent.encrypt(this.text, this.shift);
  }

  decryptText(){
    this.newText = CaesarCodeComponent.decrypt(this.text, this.shift);
  }

  toggleEncryption() {
    this.isEncrypting = !this.isEncrypting; 
    if (this.isEncrypting) this.encryptText();
    else this.decryptText();
  }

  static encrypt(text: string, shift: number): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperCaseText = text.toUpperCase();

    let encryptedText = '';

    for (let i = 0; i < upperCaseText.length; i++) {
      const char = upperCaseText[i];
      if (char === ' ') {
        encryptedText += ' ';
        continue;
      }
      const charIndex = alphabet.indexOf(char);
      if (charIndex === -1) {
        encryptedText += char;
      } else {
        const newIndex = (charIndex + shift) % alphabet.length;
        const encryptedChar = alphabet[newIndex];
        encryptedText += encryptedChar;
      }
    }
    return encryptedText;
  }

  static decrypt(encryptedText: string, shift: number): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return this.encrypt(encryptedText, alphabet.length - shift);
  }
}
