import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { GeneralesService } from '../../../services/generales.service';
import { NgForm } from '@angular/forms';

declare var $;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit{

  usuario : Usuario = new Usuario('','');
  roles: any;
  modulos: any;
  vista_cargada: boolean = false;
  modulos_usuario: any;

  constructor(public _gs: GeneralesService, public ar: ActivatedRoute, public router: Router, public _us: UsuarioService ) { 

    this._gs.cargar_perfiles_modulos()
    .subscribe( resp => {
        this.modulos = resp;
    });

    this.ar.params.subscribe( params => {
      let id = params['id'];
      this._us.traer_info_usuario(id)
            .subscribe( resp => {
              this.usuario = resp;
            });
      this._us.traer_modulos_usuario(id)
              .subscribe(resp => {
                console.log(resp);
              })
    });

    this._gs.cargar_roles()
            .subscribe((resp:any) => {
              this.roles = resp.roles;
            });

   
  }

  ngOnInit() {
    
  }

  actualizar_usuario(forma: NgForm){
    let todos_modulos: any = document.querySelectorAll('option.lista_modulos');
    let modulos_seleccionados = [];
    let aux: any;
    for(var i = 0; i < todos_modulos.length; i++){
      if(todos_modulos[i].selected){
        aux = Number(todos_modulos[i].value.split(':')[1].split("'")[1]);
        modulos_seleccionados.push(aux);
      }
    }
    this._us.modificar_usuario(this.usuario, true)
            .subscribe( resp => {});
  }

  actualizar_vista(){
    $('#pre-selected-options').multiSelect();
    this.vista_cargada = true;
  }

}
