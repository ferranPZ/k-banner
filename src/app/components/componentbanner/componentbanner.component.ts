import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-componentbanner',
  templateUrl: './componentbanner.component.html',
  styleUrls: ['./componentbanner.component.css']
})
export class ComponentbannerComponent implements OnInit {


  conversion:any;
  rta:[];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://hack.kunderlabs.com/exam/telecom/api/products/new')
    .subscribe(data => { 
     this.conversion=(data)
     
     this.rta=this.conversion;
      console.log('prueba' ,(data))
    });
  }

}
