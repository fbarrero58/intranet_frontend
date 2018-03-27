import { Component, OnInit } from '@angular/core';
import { GeneralesService } from '../../../services/generales.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-nueva-empresa',
  templateUrl: './nueva-empresa.component.html',
  styles: []
})
export class NuevaEmpresaComponent implements OnInit {

  tipo_empresa:any;
  forma: FormGroup;

  constructor(public _gs: GeneralesService, public _es: EmpresaService) {
    this._gs.cargar_tipo_empresa()
            .subscribe((resp:any) => {
              this.tipo_empresa = resp.empresas;
              console.log("tipos de empresas", this.tipo_empresa)
            });
   }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl(),
      codigo: new FormControl(),
      //id_tipo_empresa: new FormControl(),
      alias: new FormControl(),
      condicion_pago: new FormControl()
    });
  }

  crear_empresa(){
    /*this._es.crear_empresa(this.forma.value)
    .subscribe( resp => {
     //$('#modal_empresa_modificar').modal('hide');
    });
*/
console.log(this.forma.value);
  }

}
