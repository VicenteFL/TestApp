import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import * as jsPDF from 'jspdf';


var doc = new jsPDF();

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
   /*  this.signatureImage = this.signaturePad.toDataURL();
    this.Cancel = this.signatureImage; */
  }

  drawComplete() {
  /* this.signatureImage = this.signaturePad.toDataURL().replace('data:image/png;base64,', '');
  console.log(this.signatureImage) */
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
    //window.open(data);
    doc.addImage(data, 'PNG', 120, 270, 100, 20);
    doc.output('dataurlnewwindow');
    //window.open(doc);
  }
 
  ngOnInit() {
  }


}
