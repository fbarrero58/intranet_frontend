import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proyecto } from '../../models/proyecto.model';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';

declare var swal;

@Injectable()
export class ProyectoService {

  token: string = "";
  info_usuario: any;

  constructor( public http: HttpClient, public router: Router) { 
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

  esta_logueado(){
    return ( this.token.length > 5  )? true : false;
  }

  todos_proyectos(){

    let url = URL_SERVICIOS + 'proyectos/?token=' + this.token;
    return this.http.get(url);

  }

  crear_proyecto(proyecto){

    let url = URL_SERVICIOS + 'proyectos/?token='+this.token;
    return this.http.post(url,proyecto)
                    .map( (resp:any) => {
                      swal("Listo!", resp.mensaje, "success");
                      
                      return true;
                    })
                    .catch( err => {
                      swal("Ocurrio un error", err.error.mensaje, "error");
                    
                      return Observable.throw(err);
                    })
  }

  traer_info_proyecto(id_proyecto){
    let url = URL_SERVICIOS + 'proyectos/'+ id_proyecto +'/?token=' + this.token;
    console.log (url);
    return this.http.get(url)
                    .map( (resp:any) => {
                      return resp.proyecto[0];
                    });
  }

  modificar_proyecto(proyecto, id_proyecto){

    let url = URL_SERVICIOS + 'proyectos/'+ id_proyecto.id +'?token='+this.token;

    console.log (url)
    return this.http.put(url,proyecto)
                    .map( (resp:any) => {
                      swal("Listo!", resp.mensaje, "success");
          
                      return true;
                    })
                    .catch( err => {
                      swal("Ocurrio un error", err.error.mensaje, "error");
                    
                      return Observable.throw(err);
                    })
  }


}
