import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';







@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.page.html',
  styleUrls: ['./create-news.page.scss'],
})
export class CreateNewsPage implements OnInit {

  loading: boolean = false;
  fileURL: any;
  form: FormGroup;
  nameImg: string;
  sendObject: any = {
    title: '',
    subtitle: '',
    content: '',
    img: '',
    date: ''
  };
 
  @Input('name') public userName: string;

  constructor(private fb: FormBuilder, public http: HttpClient, private router: Router, public alertController: AlertController) {
    this.createForm();

  }

  createForm() {
    this.form = this.fb.group({
      fileImg: new FormControl(),
      title: [''],
      subtitle: [''],
      content: [''],
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

    this.sendObject.title=value.title;
    this.sendObject.subtitle=value.subtitle;
    this.sendObject.content=value.content;
    this.sendObject.img=this.fileURL;
    this.sendObject.date = new Date();

    console.log(this.sendObject);
    
    this.http.post('http://192.168.1.52:3000/news', this.sendObject).subscribe(async (response)=>{
      console.log(response)
      let jsonRes = JSON.parse(JSON.stringify(response));

      const alert = await this.alertController.create({
        header: 'NOTICIAS',
        message: 'Noticia añadida correctamente.',
        buttons: ['Siguiente']
      });
      
      if (jsonRes.id){  
        await alert.present();
        this.router.navigate(['/inicio']);
      } 
    },  async  (error) => {

      const alertError = await  this.alertController.create({
        header: 'NOTICIAS',
        message: 'Error! Vuelve a intentarlo',
        buttons: ['Siguiente']
      });
      
      await alertError.present();

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

      
      this.nameImg=file.name;
      console.log(file.name)
      console.log(file.type)
      console.log(file)
    }
  }


  ngOnInit() {
  }
}
