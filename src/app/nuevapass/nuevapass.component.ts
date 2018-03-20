import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-nuevapass',
  templateUrl: './nuevapass.component.html',
  styleUrls: ['./nuevapass.component.css']
})
export class NuevapassComponent implements OnInit {

  correo: string = "Prueba@prueba.com";
  cargando: boolean = false;

  constructor( public _us: UsuarioService ) { 
    
   }

  ngOnInit() {
  }

  enviar( forma: NgForm ){
    
    if( forma.invalid ){
      return;
    }
    this.cargando = true;
    if( forma.value.password !== forma.value.password2 ){
      console.log('Las contraseñas deben ser iguales');
    }else{
      console.log('Todo OK');
    }
    this.cargando = false;
  }

}
