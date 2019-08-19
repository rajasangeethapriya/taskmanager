import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';



import {MatSliderModule} from '@angular/material/slider'; 
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatTabsModule,
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      MatSliderModule,
      MatCardModule,
      MatInputModule,MatDatepickerModule,MatGridListModule
      
   ],
   exports:[
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSliderModule,
    MatCardModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }