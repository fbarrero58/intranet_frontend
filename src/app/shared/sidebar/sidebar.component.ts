import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario:any;

  constructor( public _us: UsuarioService, public _ss: SidebarService ) { 
    
  }

  ngOnInit() {
    this.usuario = this._us.info_usuario;
  }

}
