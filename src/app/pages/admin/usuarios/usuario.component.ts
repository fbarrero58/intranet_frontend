import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { GeneralesService } from '../../../services/generales.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario('','');
  roles: any;

  constructor(public _gs: GeneralesService, public ar: ActivatedRoute, public router: Router, public _us: UsuarioService ) { 

    this.ar.params.subscribe( params => {
      let id = params['id'];
      this._us.traer_info_usuario(id)
            .subscribe( resp => {
              this.usuario = resp;
            });
    });

    this._gs.cargar_roles()
            .subscribe((resp:any) => {
              this.roles = resp.roles;
            });

    
  }

  ngOnInit() {
  }

  actualizar_usuario(forma: NgForm){
    this._us.modificar_informacion(this.usuario.perfil_profesional,this.usuario)
            .subscribe( resp => {});
  }

}
