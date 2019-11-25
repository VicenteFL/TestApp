import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl  } from '@angular/forms';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.page.html',
  styleUrls: ['./file-upload.page.scss'],
})
export class FileUploadPage implements OnInit {

  loading: boolean = false;
  imgURL: any;
  form: FormGroup;
  @Input('name') public userName: string;

  constructor(private fb: FormBuilder) {
    
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      foto: new FormControl()
    });
  }
  

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      this.loading = false;
    }, 1000);
  }

  // private prepareSave(): any {
  //   let input = new FormData();
  //   input.append('name', this.form.get('name').value);
  //   input.append('foto', this.form.get('foto').value);
  //   return input;
  // }

  onFileChange(event) {
    
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        // this.form.controls.foto.setValue({
        //   filename: file.name,
        //   filetype: file.type,
        //   value: (<string>reader.result).split(',')[1],
        // })

        //https://stackoverflow.com/questions/48343853/angular-5-how-to-upload-an-image
        this.imgURL = reader.result;
      };

      
    
      console.log(file.name)
      console.log(file.type)

    }
  }
 


  ngOnInit() {
  }

}
