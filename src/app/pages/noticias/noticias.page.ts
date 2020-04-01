import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  
  jsonRes: any;
  news: any  = {
    title: '',
    subtitle: '',
    content: '',
    img: ''
  }
  noticiasAUX: any;
  noticias: any [];
  elementContent: any;
  itemSelected = false;
  item;
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.readListOfNews();
  }
  
  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const newsA = a.date;
    const newsB = b.date;
  
    let comparison = 0;
    if (newsA > newsB) {
      comparison = -1;
    } else if (newsA < newsB) {
      comparison = 1;
    }
    return comparison;
  }
  
  textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
  }
  

  async readListOfNews(){
    await this.http.get('http://192.168.1.52:3000/news').toPromise().then(
      res => { // Success
        this.jsonRes = JSON.parse(JSON.stringify(res))
        console.log(this.jsonRes.News[0]);
        this.noticias = this.jsonRes.News[0];
        this.noticias.sort(this.compare);
      });
    }
  
  load(n){
    this.item = n;
    this.itemSelected = true;
  }

  unload(){
    this.itemSelected = false;
  }

}
