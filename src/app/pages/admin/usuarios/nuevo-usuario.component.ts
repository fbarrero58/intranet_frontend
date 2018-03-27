import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';
import { GeneralesService } from '../../../services/generales.service';

declare var $;

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styles: []
})
export class NuevoUsuarioComponent implements OnInit {

  roles:any;

  constructor(public _gs: GeneralesService) { 
    this._gs.cargar_roles()
            .subscribe((resp:any) => {
              this.roles = resp.roles;
            });
  }

  ngOnInit() {

  }

  crear_usuario( forma: NgForm ){
    let objeto_usuario = {
      'id_rol': forma.value.id_rol,
      'cargo': forma.value.cargo,
      'fecha_vinculacion': forma.value.fecha_vinculacion,
      'foto': 'default.png',
      'perfil_profesional': 'Aún no se Especifica',
      'correo': forma.value.correo,
      'password': '',
      'nombres': forma.value.nombres,
      'apellidos': forma.value.apellidos,
      'rut': forma.value.rut,
      'correo_personal': forma.value.correo_personal,
      'celular': forma.value.celular,
      'fecha_nacimiento': forma.value.fecha_nacimiento,
      'direccion': '',
      'pais_origen': '',
      'pais_destiono': ''
    };
    console.log(objeto_usuario);
  }


}
