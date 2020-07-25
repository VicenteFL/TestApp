import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import * as jsPDF from 'jspdf';

const email: string = 'vicente.241296@gmail.com';
var doc = new jsPDF();

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})


export class DocumentsPage implements OnInit {

  jsonRes: any;
  docs: any  = {
    docname: '',
    docid: ''
  }
  docSelected: boolean = false;
  docSigning: String;
  onSave = new EventEmitter();
  signature = '';
  isDrawing = false;
  docidSelected: any;
  loading: boolean = false;

  @ViewChild(SignaturePad, {static: false}) public signaturePad: SignaturePad;

  public signatureImage : string;
  public signaturePadOptions: Object = {
        'minWidth': 2,
        'canvasWidth': 1000,
        'canvasHeight': 200 };

  public Cancel: string;
  
  

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.readListOfDocs();
  }

  async readListOfDocs(){
    await this.http.get('http://192.168.1.45:3000/api/user/' + email).toPromise().then(
      res => { // Success
        this.jsonRes = JSON.parse(JSON.stringify(res))
        this.docs.docname = this.jsonRes.docsname;
        this.docs.docid = this.jsonRes.documents;
        
        console.log(this.docs.docname.length)
        console.log(this.jsonRes)

      });
    
    }
  
  async loadSign(docname, index){
    this.docSelected = true;
    this.docSigning = docname;
    this.docidSelected = this.docs.docid[index];

    console.log(this.docidSelected);

    await this.http.get('http://192.168.1.45:3000/pdf/' + this.docidSelected).toPromise().then(
      res => { // Success
        let jsonRes = JSON.parse(JSON.stringify(res))
        console.log(jsonRes.doc)
        window.open(jsonRes.doc);
      });
    
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

  onSaveHandler(data: String) {
    console.log('onsave clicked');
    let jsonRes = JSON.parse(JSON.stringify(data))
    console.log([jsonRes]);
    

    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      this.loading = false;
    }, 1000);

    this.http.post('http://192.168.1.45:3000/sign', {photo: jsonRes, docid: this.docidSelected}).subscribe((response)=>{
      let jsonImg = JSON.parse(JSON.stringify(response))
      let i = 0;
      var numPags = jsonImg.Lista[0].length;
      for (let i = 0; i < numPags; i++){
        doc.addImage(jsonImg.Lista[0][i], 'PNG', 0,0,210,297)
        doc.addImage(jsonRes, 'PNG', 120, 270, 100,20)
        doc.addPage()
      }
      doc.deletePage(numPags+1)
      doc.output('dataurlnewwindow');
    });

    /* doc.addImage(data, 'PNG', 120, 270, 100, 20);
    doc.output('dataurlnewwindow');
 */



  }

  }

 
