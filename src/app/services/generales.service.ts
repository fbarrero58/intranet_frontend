import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';

@Injectable()
export class GeneralesService {

  constructor(public http: HttpClient) { 
  }

  cargar_roles(){
      let url = URL_SERVICIOS + 'vmca/roles/?token='+localStorage.getItem('token');
      return this.http.get(url);
  }

  cargar_tipo_empresa(){
    let url = URL_SERVICIOS + 'vmca/tipoempresa/?token='+localStorage.getItem('token');
    return this.http.get(url);
   
}

cargar_servicios(){
    let url = URL_SERVICIOS + 'vmca/tiposervicio/?token='+localStorage.getItem('token');
    return this.http.get(url);
}

cargar_lineas(){
    let url = URL_SERVICIOS + 'vmca/lineaservicio/?token='+localStorage.getItem('token');
    return this.http.get(url);
}

cargar_alianzas(){
    let url = URL_SERVICIOS + 'alianzas/?token='+localStorage.getItem('token');
    return this.http.get(url);
}


}
