import { Injectable } from '@angular/core';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable'

declare var swal;

@Injectable()
export class UsuarioService {

  setear: boolean = false;
  usuario: any;
  token: string = "";

  constructor( public http: HttpClient ) { 
    
    if( localStorage.getItem('token') ){
      this.token = localStorage.getItem('token');
    }

  }

  esta_logueado(){
    return ( this.token.length > 5  )? true : false;
  }

  iniciar_sesion( usuario: Usuario, recordar: boolean = false ) {
    
    let url = 'http://localhost/rest/index.php/login';

    return this.http.post( url, usuario)
            .map( (resp:any) => {
                if( resp.setear ){
                  this.setear = true;
                  this.usuario = resp.id_usuario;
                }else{
                  this.token = resp.token;
                  localStorage.setItem('token',this.token);
                }
                
                return true;
            });
  }

  actualizar_password( password: string ){

    let url = 'http://localhost/rest/index.php/login';

    let objeto = {
      'id': this.usuario,
      'pass': password
    };

    return this.http.put(url,objeto)
            .map( (resp:any) => {
              if(resp.err){
                swal("Ocurrio un error", resp.mensaje, "error");
              }else{
                this.setear = false;
                swal("Listo!", resp.mensaje, "success");
              }
              return true;
            });

  }

}
