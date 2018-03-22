import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  usuario:any;

  constructor( public _us: UsuarioService ) {
    this.usuario = this._us.info_usuario;
   }

  ngOnInit() {
    $('.mydatepicker').datepicker();
  }

 

}
