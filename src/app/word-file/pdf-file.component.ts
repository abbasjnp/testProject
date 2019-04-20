import { Component, OnInit } from '@angular/core';
import {saveAs} from 'file-saver';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-pdf-file',
  templateUrl: './pdf-file.component.html',
  styleUrls: ['./pdf-file.component.scss']
})
export class PdfFileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    console.log("In Pdf File componenet!!!");
  
    }
    getWordFile(){
      let headers = new HttpHeaders();
headers = headers.set('Accept', 'application/pdf');
return this.http.get('http://www.africau.edu/images/default/sample.pdf', { headers: headers, responseType: 'blob' })      

     
      .subscribe(blob => {
        saveAs(blob, 'download.pdf');
      });    
  }
 
}
