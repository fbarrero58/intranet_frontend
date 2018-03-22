import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: any;

  constructor( public _us: UsuarioService ) { 
    this.usuario = this._us.info_usuario;
  }

  ngOnInit() {
  }

  cerrar_sesion(){
    this._us.cerrar_sesion();
  }

}
