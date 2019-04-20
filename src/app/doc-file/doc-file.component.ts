import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import * as fileSaver from 'file-saver';
import {saveAs} from 'file-saver';
import{HttpClient} from '@angular/common/http'
import { getCurrentDebugContext } from '@angular/core/src/view/services';


@Component({
  selector: 'app-doc-file',
  templateUrl: './doc-file.component.html',
  styleUrls: ['./doc-file.component.scss']
})
export class DocFileComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer, private http:HttpClient) { }
  fileUrl;

  ngOnInit() {
    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    
  }
 


 

}
