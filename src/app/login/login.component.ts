import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
userid= '';
password='';
bienvenido='';

autenticato:boolean=true;
error_message:string="User ID e/o Password errata";

  gestAut(){
    console.log(this.userid )
    if (this.userid==='Giuseppe' && this.password==='ciao') {
      this.autenticato=true;
      this.bienvenido='Bienvenido';
    }
    else{
      this.autenticato=false;
    }
  }


}
