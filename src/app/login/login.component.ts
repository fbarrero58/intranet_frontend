import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  cargando: boolean = false;

  constructor( public _us: UsuarioService, public router: Router ) { 
    
  }

  ngOnInit() {
  }

  ingresar( forma: NgForm ){

    if( forma.invalid ){
      return;
    }

    this.cargando = true;
    let usuario = new Usuario( forma.value.email, forma.value.password );

    this._us.iniciar_sesion( usuario, this.recuerdame )
            .subscribe( resp => {
                this.cargando = false;
                if( this._us.setear ){
                  this.router.navigate(['/nuevapass', forma.value.email]);
                }else{
                  this.router.navigate(['/dashboard']);
                }
            });
  }

}
