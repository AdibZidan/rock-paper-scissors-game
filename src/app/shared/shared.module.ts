import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from '../components/modal/modal.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { OriginalComponent } from './components/original/original.component';

@NgModule({
  declarations: [
    ModalComponent,
    BonusComponent,
    OriginalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    ModalComponent,
    BonusComponent,
    OriginalComponent
  ]
})
export class SharedModule { }
