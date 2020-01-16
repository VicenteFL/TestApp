import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  data: any = [];

  constructor(public http: HttpClient) {}

  ngOnInit() {}

  searchData(){
    this.results= this.http.get('http://localhost:3000/api/employee');
    this.results.subscribe(data =>{
      console.log(data);
      this.data = data.Empleado1[0][0].email;
      console.log(this.data)
    });

  }

  postData(){
    let employee = {
      name: 'Vicente',
      email: 'vicente.flledo@alumnos.upm.es',
      pc: 30009
    }
    console.log(employee)
    this.http.post('http://localhost:3000/api/employee', employee).subscribe((response)=>{
      console.log(response)
    });
  }
}

