import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import { Empresa } from '../../models/empresa.models';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable'

declare var swal;


@Injectable()
export class EmpresaService {

  token: string = "";
  info_usuario: any;
  habilitado: any;

  constructor( public http: HttpClient, public router: Router ) {  
    this.cargar_storage();
  }

  cargar_storage(){
    if( localStorage.getItem('token') ){
      this.token = localStorage.getItem('token');
    }
    if( localStorage.getItem('info_usuario') ){
      this.info_usuario = JSON.parse(localStorage.getItem('info_usuario'));
    }
  }

  modificar_empresa(empresa:any, id_empresa: any){
    let url = URL_SERVICIOS + 'empresas/'+ id_empresa.id +'?token='+ this.token;
   
    if (empresa.habilitado== true){
      this.habilitado= 'T'
    }else{
      this.habilitado='F'
    }

    let objeto = {
      'tipo_empresa': empresa.id_tipo_empresa,
      'nombre': empresa.nombre,
      'habilitado': this.habilitado,
      'condicion_pago': empresa.condicion_pago
  }

  console.log("objeto", objeto);

    return this.http.put(url,objeto)
     .map( (resp:any) => {
              if(resp.err){
                swal("Ocurrio un error", resp.mensaje, "error");
              }else{            
                swal("Listo!", resp.mensaje, "success");
              }
              return true;
            });
  }

  crear_empresa(empresa:any){
    let url = URL_SERVICIOS + 'empresas/?token='+ this.token;
    let objeto = {
      'tipo_empresa': '1',
      'codigo': empresa.codigo,
      'nombre': empresa.nombre,
      'habilitado': 'T',
      'alias': empresa.alias,
      'condicion_pago': empresa.condicion_pago
  }

  console.log("objeto", objeto);

    return this.http.post(url,objeto)
     .map( (resp:any) => {
              if(resp.err){
                swal("Ocurrio un error", resp.mensaje, "error");
              }else{            
                swal("Listo!", resp.mensaje, "success");
              }
              return true;
            });
  }

  
}
