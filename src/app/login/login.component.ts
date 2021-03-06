import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;

  constructor( public _us: UsuarioService, public router: Router ) { 
    if( this._us.token.length > 2 ){
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    init_plugins();
  }

  ingresar( forma: NgForm ){

    if( forma.invalid ){
      return;
    }
    let usuario = new Usuario( forma.value.email, forma.value.password );

    this._us.iniciar_sesion( usuario, this.recuerdame )
            .subscribe( resp => {
                if( this._us.setear ){
                  this.router.navigate(['/nuevapass', forma.value.email]);
                }else{
                  this._us.traer_info()
                          .subscribe( resp => this.router.navigate(['/dashboard']));
                }
            });
  }

}
