import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Proyecto } from '../../../models/proyecto.model';
import { GeneralesService } from '../../../services/generales.service';
import { ProyectoService } from '../../../services/proyecto/proyecto.service';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styles: []
})
export class NuevoProyectoComponent implements OnInit {

  servicios:any;
  habilitado:any;
  lineas:any;
  alianzas:any;
  clientes:any;
  factura:any;
  ticket:any;
  forma: FormGroup;

  constructor(public _gs: GeneralesService, public _em: EmpresaService, public _ps: ProyectoService) { 
    this._gs.cargar_servicios()
    .subscribe((resp:any) => {
      this.servicios = resp.servicios;
    });

    this._gs.cargar_lineas()
    .subscribe((resp:any) => {
      this.lineas = resp.lineas;
    });

    this._gs.cargar_alianzas()
    .subscribe((resp:any) => {
      this.alianzas = resp.alianzas;
    });

    this._em.todos_empresas()
      .subscribe((resp:any) => {
      console.log("empresas",resp);
      this.clientes = resp.empresas;
    });
  }

  ngOnInit() {
    this.forma = new FormGroup({
      empresa: new FormControl(),
      tipo_servicio: new FormControl(),
      linea_servicio: new FormControl(),
      alianza: new FormControl(),
      oportunidad: new FormControl(),
      codigo: new FormControl(),
      nombre: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      habilitado: new FormControl(),
      ticket: new FormControl(),
      horas: new FormControl(),
      facturable: new FormControl()
    });
  }

  crear_proyecto( ){
    if (this.forma.value.facturable == true){
      this.factura= 'T'
    }else{
      this.factura='F'
    }

    if (this.forma.value.ticket == true){
      this.ticket= 'T'
    }else{
      this.ticket='F'
    }

   
    //console.log(this.forma.value);

    let objeto_proyecto = {
      'empresa': this.forma.value.empresa,
      'tipo_servicio': this.forma.value.tipo_servicio,
      'linea_servicio': this.forma.value.linea_servicio,
      'alianza': this.forma.value.alianza,
      'oportunidad': '1',
      'codigo': this.forma.value.codigo,
      'nombre': this.forma.value.nombre,
      'inicio': this.forma.value.inicio,
      'fin': this.forma.value.fin,
      'habilitado': 'T',
      'ticket': this.ticket,
      'horas': this.forma.value.horas,
      'facturable': this.factura
    };
    console.log (objeto_proyecto);
    this._ps.crear_proyecto(objeto_proyecto)
            .subscribe(resp => {});
  }

}
