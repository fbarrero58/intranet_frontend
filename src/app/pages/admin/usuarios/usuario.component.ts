import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario('','');

  constructor( public ar: ActivatedRoute, public router: Router, public _us: UsuarioService ) { 

    this.ar.params.subscribe( params => {
      let id = params['id'];
      this._us.traer_info_usuario(id)
            .subscribe( resp => {
              this.usuario = resp;
            });
    });

    
  }

  ngOnInit() {
  }

}
