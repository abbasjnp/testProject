import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocFileComponent } from './doc-file/doc-file.component';
import { PdfFileComponent } from './pdf-file/pdf-file.component';
import { FusionChartComponent } from './fusion-chart/fusion-chart.component';
import { WordFileComponent } from './word-file/word-file.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {path:'downloadTextFile',component:DocFileComponent},
  {path:'downloadPdfFile',component:PdfFileComponent},
  {path:'downloadWordFile',component:WordFileComponent},

  {path:'fusion-hart',component:FusionChartComponent},
  {path:'ViewChild',component:ViewChildComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
