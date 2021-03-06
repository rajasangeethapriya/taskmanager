import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent,DialogContentExampleDialog } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule,
   MatNativeDateModule,MatButtonModule,MatAutocompleteModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatTabChangeEvent} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog'; 
import { GrdFilterPipe } from './grd-filter.pipe';
import { Sort } from './sort';
//MatNativeDateModule



import {MatSliderModule} from '@angular/material/slider'; 
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
   declarations: [
      AppComponent,DialogContentExampleDialog,GrdFilterPipe,Sort
   ],
   imports: [
      BrowserModule,HttpClientModule,
      BrowserAnimationsModule,
      MatTabsModule,
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      MatSliderModule,
      MatCardModule,
      MatButtonModule,
      MatInputModule,MatDatepickerModule,MatGridListModule,MatNativeDateModule,MatDialogModule,MatAutocompleteModule
      
   ],
   exports:[
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSliderModule,
    MatCardModule,MatDialogModule,MatAutocompleteModule
   ],
   entryComponents: [AppComponent, DialogContentExampleDialog],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { 




}
