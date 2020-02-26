import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-pdf',
  templateUrl: './send-pdf.page.html',
  styleUrls: ['./send-pdf.page.scss'],
})
export class SendPdfPage implements OnInit {

  loading: boolean = false;
  fileURL: any;
  form: FormGroup;
  namePdf: string;
  sendObject: any = {
    fileName: '',
    file: '',
    destinatario: ''
  };

 
  @Input('name') public userName: string;

  constructor(private fb: FormBuilder, public http: HttpClient) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      filePdf: new FormControl(),
      destinatario: ['']
    });
  }
  

  onSubmit(value) {
    
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      this.loading = false;
    }, 1000);

    this.sendObject.fileName=this.namePdf;
    this.sendObject.file=this.fileURL;
    this.sendObject.destinatario=value.destinatario;

    console.log(this.sendObject);
    
    this.http.post('http://192.168.1.137:3000/pdf', this.sendObject).subscribe((response)=>{
      console.log(response)
    });
  }

  onFileChange(event) {
    
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.fileURL = reader.result;
        console.log(this.fileURL);
      };

      
      this.namePdf=file.name;
      console.log(file.name)
      console.log(file.type)
      console.log(file)

    }
  }
  ngOnInit() {
  }

}
