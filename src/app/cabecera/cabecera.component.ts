import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }
  loggerUser:String;
  loggerPass:String;
  userLogged;
  entering;

  ngOnInit(): void {
    this.entering=false;
    this.userLogged=false;
    this.loggerUser="";
    this.loggerPass="";
  }

  onLoggin(){
    this.entering=true;
  }

  loginFunction(){
    if(this.loggerUser === "" || this.loggerPass === ""){
      alert("Debes informar el usuario y contraseña");
    }else{
      this.userLogged=true;
      this.entering=false;
    }

  }

  logOut(){
    this.userLogged=false;
    this.loggerUser="";
    this.loggerPass="";
  }

}