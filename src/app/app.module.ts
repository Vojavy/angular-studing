import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppMainContentComponent } from './app-main-content/app-main-content.component';
import { FeatureModuleComponent } from './feature-module/feature-module.component';
import { GreetingsPageComponent } from './greetings-page/greetings-page.component';
import { FooterComponent } from './footer/footer.component';
import { CaesarCodeComponent } from './dynamic-components/caesar-code/caesar-code.component';
import { ChiffreDeVigenereComponent } from './dynamic-components/chiffre-de-vigenere/chiffre-de-vigenere.component';
import { FormsGeneratorComponent } from './dynamic-components/forms-generator/forms-generator.component';
import { TextInputComponent } from './dynamic-components/forms-generator/inputs/text-input/text-input.component';
import { ListboxInputComponent } from './dynamic-components/forms-generator/inputs/listbox-input/listbox-input.component';
import { CheckBoxInputComponent } from './dynamic-components/forms-generator/inputs/check-box-input/check-box-input.component';
import { FormsGeneratorService } from './dynamic-components/forms-generator/forms-generator.service';
import { DropDownInputComponent } from './dynamic-components/forms-generator/inputs/drop-down-input/drop-down-input.component';
import { ReactiveFormsComponent } from './dynamic-components/reactive-forms/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppMainContentComponent,
    FeatureModuleComponent,
    FooterComponent,
    CaesarCodeComponent,
    ChiffreDeVigenereComponent,
    GreetingsPageComponent,
    FormsGeneratorComponent,
    TextInputComponent,
    ListboxInputComponent,
    CheckBoxInputComponent,
    DropDownInputComponent,
    ReactiveFormsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: GreetingsPageComponent },
      { path: 'dynamicС/:moduleShortName', component: FeatureModuleComponent }
    ]),
    CommonModule // Добавьте этот модуль в раздел imports
  ],
  providers: [FormsGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
