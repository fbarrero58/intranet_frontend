import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  nombre: string = "";

  constructor(public _us: UsuarioService) {
    this.nombre = this._us.info_usuario.nombres + ' ' + this._us.info_usuario.apellidos;
   }

  ngOnInit() {
  }

}
