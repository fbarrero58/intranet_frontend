import { Proyecto } from '../../../models/proyecto.model';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralesService } from '../../../services/generales.service';
import { ProyectoService } from '../../../services/proyecto/proyecto.service';
import { EmpresaService } from '../../../services/empresa/empresa.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent implements OnInit {

  servicios:any;
  lineas:any;
  alianzas:any;
  clientes:any;
  factura:any;
  ticket:any;
  habilitado:any;
  proyecto: Proyecto = new Proyecto('','');
  forma: FormGroup;

  constructor(public ar: ActivatedRoute,public _gs: GeneralesService, public _em: EmpresaService, public _ps: ProyectoService) {
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
     
      this.clientes = resp.empresas;
    });

    this.ar.params.subscribe( params => {
      let id = params['id'];
      this._ps.traer_info_proyecto(id)
            .subscribe( resp => {
              this.proyecto = resp;
            console.log(this.proyecto);
            });
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

  modificar_proyecto(){
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

    if (this.forma.value.habilitado == true){
      this.habilitado= 'T'
    }else{
      this.habilitado='F'
    }
    //console.log(this.forma.value);

    let objeto_proyecto = {
      'id_empresa': this.forma.value.empresa,
      'id_tipo_servicio': this.forma.value.tipo_servicio,
      'id_linea_servicio': this.forma.value.linea_servicio,
      'id_alianza': this.forma.value.alianza,
      'id_oportunidad': '15',
      'codigo': this.forma.value.codigo,
      'nombre': this.forma.value.nombre,
      'inicio': this.forma.value.inicio,
      'fin': this.forma.value.fin,
      'habilitado': this.habilitado,
      'ticket': this.ticket,
      'horas': this.forma.value.horas,
      'facturable': this.factura
    };

    console.log (objeto_proyecto);
   this._ps.modificar_proyecto(objeto_proyecto,this.proyecto)
            .subscribe(resp => {});
  }

   
  }


