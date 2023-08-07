import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstSiblingComponent } from './components/first-sibling/first-sibling.component';
import { SecondSiblingComponent } from './components/second-sibling/second-sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSiblingComponent,
    SecondSiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
