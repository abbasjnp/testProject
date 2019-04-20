import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {DocFileComponent} from './doc-file/doc-file.component'
import * as fileSaver from 'file-saver';
import { PdfFileComponent } from './pdf-file/pdf-file.component';
import { HttpClientModule } from '@angular/common/http';
import { GobackComponent } from './goback/goback.component';
import { FusionChartComponent } from './fusion-chart/fusion-chart.component';

import { ColorPickerModule } from 'ngx-color-picker';

 
    /*-------Fusion Chart Module -----------*/
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Chart from 'fusioncharts/fusioncharts.overlappedcolumn2d'

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { WordFileComponent } from './word-file/word-file.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ColorSampleComponent } from './view-child/color-sample/color-sample.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module'
import {FormsModule } from '@angular/forms';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme,Chart);

     /*---------------End of Fustion Chart Module here---------------*/

@NgModule({
  declarations: [
    AppComponent,
    DocFileComponent,
    PdfFileComponent,
    GobackComponent,
    FusionChartComponent,
    WordFileComponent,
    ViewChildComponent,
    ColorSampleComponent,
    ColorPickerModule

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FusionChartsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
