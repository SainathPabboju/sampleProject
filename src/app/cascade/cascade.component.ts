import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { text } from 'express';

@Component({
  selector: 'app-cascade',
  templateUrl: './cascade.component.html',
  styleUrls: ['./cascade.component.css']
})
export class CascadeComponent implements OnInit {
  value1:String="";
  value2:String="";
  data2:any;
  data3:any;
  data4:any;
  constructor(private http:HttpClient,private router: Router) { 
    console.log("I am here")
  }

  ngOnInit(): void {
  }

  Cascading2(){
    let response=this.http.get("http://localhost:8080?a=1",{responseType:'text' as 'json'})
    response.subscribe((data:any)=>{
      // this.data2=data;
      console.log(typeof(data));
       this.data3=JSON.parse(data);
       console.log(this.data3);
       console.log("HI")
    })
 
  }

  Cascading3(){
    let response=this.http.get("http://localhost:8080?a=2",{responseType:'text' as 'json'})
    response.subscribe((data:any)=>{
      // this.data2=data;
      console.log(typeof(data));
       this.data3=JSON.parse(data);
       console.log(this.data3);
       console.log("HI")
    })
 
  }

  Cascading4(){
    let response=this.http.get("http://localhost:8080?a=3",{responseType:'text' as 'json'})
    response.subscribe((data:any)=>{
      // this.data2=data;
      console.log(typeof(data));
       this.data3=JSON.parse(data);
       console.log(this.data3);
       console.log("HI")
    })
 
  }

  Cascading1(input:string){
    let response=this.http.get("http://localhost:8080/new?a="+input,{responseType:'text' as 'json'})
    response.subscribe((data:any)=>{
      // this.data2=data;
      
       this.data3=JSON.parse(data);
       this.data4=JSON.parse(data);
       console.log(this.data3);
       console.log("HI")
    })
  }
  Cascading5(){
    let response=this.http.get("http://localhost:8080/new?a=b",{responseType:'text' as 'json'})
    response.subscribe((data:any)=>{
      // this.data2=data;
      
       this.data3=JSON.parse(data);
       this.data4=JSON.parse(data);
       console.log(this.data3);
       console.log("HI")
    })
  }
  Cascading(){
    let response=this.http.get("http://localhost:8080/new?a=a",{responseType:'text' as 'json'})
    response.subscribe((data:any)=>{
      // this.data2=data;
      
       this.data3=JSON.parse(data);
       this.data4=JSON.parse(data);
       console.log(this.data3);
       console.log("HI")
    })
  } 
}
