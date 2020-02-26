import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import * as jsPDF from 'jspdf';
import * as PDF2Pic from 'pdf2pic';


/* const pdf = new PDF2Pic({
  density: 100,           // output pixels per inch
  savename: "untitled",   // output file name
  savedir: "./images",    // output file location
  format: "png",          // output file format
  size: "600x600"         // output size in pixels
}); */



var doc = new jsPDF();
/* var PDFImage = require("pdf-image").PDFImage; 
var pdfImage = new PDFImage("/assets/NotasUPCT.pdf"); */


@Component({
  selector: 'app-signpad',
  templateUrl: './signpad.page.html',
  styleUrls: ['./signpad.page.scss'],
})

/* 
var signaturePad = new signaturePad(canvas, {
  minWidth: 5,
  maxWidth: 10,
  penColor: "rgb(66, 133, 244)"
}); */


export class SignpadPage implements OnInit {

  onSave = new EventEmitter();
  signature = '';
  isDrawing = false;

  @ViewChild(SignaturePad, {static: false}) public signaturePad: SignaturePad;

  public signatureImage : string;
  public signaturePadOptions: Object = {
        'minWidth': 2,
        'canvasWidth': 1000,
        'canvasHeight': 200 };

  public Cancel: string;

  constructor() {
  
  }

  drawComplete() {
    this.onSave.emit(this.signaturePad.toDataURL()); 
    this.onSaveHandler(this.signaturePad.toDataURL());
  }

  drawClear() {
    this.signaturePad.clear();
    this.onClearHandler();
  }

  onClearHandler() {
    console.log('onclear clicked...');
  }

  onSaveHandler(data: any) {
    console.log('onsave clicked');
    console.log(data);
    //window.open(data)

    /* pdf.convert("/assets/NotasUPCT.pdf", -1).then((resolve) => {
      console.log("image converter successfully!");
    
      return resolve;
    }); */

    doc.addImage(data, 'PNG', 120, 270, 100, 20);
    doc.output('dataurlnewwindow');
    //window.open(doc);



  }
 
  ngOnInit() {
  }

  

}
