import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../../../models/empresa.models';
import { EmpresaService } from '../../../services/empresa/empresa.service';



@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styles: []
})
export class EmpresaComponent implements OnInit {
  empresa : Empresa = new Empresa();
  forma_modificar: FormGroup;

  constructor(public ar: ActivatedRoute, public router: Router, public _us: UsuarioService, public _es: EmpresaService) { 

    this.ar.params.subscribe( params => {
      let id = params['id'];
      this._us.traer_info_empresa(id)
            .subscribe( resp => {
              this.empresa = resp;
              console.log (this.empresa);
            });
    });
    
  }

  ngOnInit() {
    this.forma_modificar = new FormGroup({
      nombre: new FormControl(),
      codigo: new FormControl(),
      id_tipo_empresa: new FormControl(),
      alias: new FormControl(),
      condicion_pago: new FormControl(),
      habilitado: new FormControl()
    });
  }


  modificar_empresa(){
    this._es.modificar_empresa(this.forma_modificar.value, this.empresa)
     .subscribe( resp => {
      //$('#modal_empresa_modificar').modal('hide');
     });
  }


}
