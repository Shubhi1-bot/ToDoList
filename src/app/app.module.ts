import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgDragDropModule } from 'ng-drag-drop';
import { AppComponent } from './app.component';

import { TodolistComponent } from './todolist/todolist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    NgDragDropModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
