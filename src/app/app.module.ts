import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { StackComponent }  from './component/stack/stack.component';


@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent , StackComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
