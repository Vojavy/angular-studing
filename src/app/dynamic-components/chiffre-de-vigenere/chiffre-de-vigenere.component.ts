import { Component } from '@angular/core';
import { Module } from '../Module';

@Component({
  selector: 'app-chiffre-de-vigenere',
  templateUrl: './chiffre-de-vigenere.component.html',
  styleUrls: ['./chiffre-de-vigenere.component.css']
})
export class ChiffreDeVigenereComponent extends Module {
  text = "Vigenere is here!";
  keyword = "KEY"; // Замените на свое ключевое слово
  newText = ChiffreDeVigenereComponent.encrypt(this.text, this.keyword);
  inputText:string =" ";
  resultText: string = " ";

  isEncrypting: boolean = true;

  constructor() {
    super("Vigenere code", "VC", "Vigenere code module", ChiffreDeVigenereComponent);
  }

  encryptText() {
    this.newText = ChiffreDeVigenereComponent.encrypt(this.text, this.keyword);
  }

  decryptText() {
    this.newText = ChiffreDeVigenereComponent.decrypt(this.text, this.keyword);
  }

  toggleEncryption() {
    this.isEncrypting = !this.isEncrypting;
  }

  handleText() {
    if (this.isEncrypting) {
      this.encryptText();
    } else {
      this.decryptText();
    }
    this.resultText = this.newText;
    this.inputText = this.text;
  }

  static encrypt(text: string, keyword: string): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperCaseText = text.toUpperCase();
    const upperCaseKeyword = keyword.toUpperCase();

    let encryptedText = '';
    let keywordIndex = 0;

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
        const keywordChar = upperCaseKeyword[keywordIndex % upperCaseKeyword.length];
        const keywordIndexInAlphabet = alphabet.indexOf(keywordChar);
        const newIndex = (charIndex + keywordIndexInAlphabet) % alphabet.length;
        const encryptedChar = alphabet[newIndex];
        encryptedText += encryptedChar;
        keywordIndex++;
      }
    }
    return encryptedText;
  }

  static decrypt(encryptedText: string, keyword: string): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperCaseKeyword = keyword.toUpperCase();

    let decryptedText = '';
    let keywordIndex = 0;

    for (let i = 0; i < encryptedText.length; i++) {
      const char = encryptedText[i];
      if (char === ' ') {
        decryptedText += ' ';
        continue;
      }
      const charIndex = alphabet.indexOf(char);
      if (charIndex === -1) {
        decryptedText += char;
      } else {
        const keywordChar = upperCaseKeyword[keywordIndex % upperCaseKeyword.length];
        const keywordIndexInAlphabet = alphabet.indexOf(keywordChar);
        const newIndex = (charIndex - keywordIndexInAlphabet + alphabet.length) % alphabet.length;
        const decryptedChar = alphabet[newIndex];
        decryptedText += decryptedChar;
        keywordIndex++;
      }
    }
    return decryptedText;
  }
}
