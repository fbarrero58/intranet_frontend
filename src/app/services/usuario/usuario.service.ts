import { Injectable } from '@angular/core';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable'


@Injectable()
export class UsuarioService {

  setear: boolean = false;
  usuario: any;

  constructor( public http: HttpClient ) { 
    
  }


  iniciar_sesion( usuario: Usuario, recordar: boolean = false ) {
    
    let url = 'http://localhost/rest/index.php/login';

    return this.http.post( url, usuario)
                .map( (resp:any) => {
                    if( resp.setear ){
                      this.setear = true;
                      this.usuario = resp.id_usuario;
                    }else{
                      
                    }
                    
                    return true;
                });

  }

  cerrar_sesion(){
    
  }

}
