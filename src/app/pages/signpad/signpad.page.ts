import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';


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

  /* drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL().replace('data:image/png;base64,', '');
    console.log(this.signatureImage)
  }

  drawClear() {
    this.signaturePad.clear();
  }
 */
  ngOnInit() {
  }


}
