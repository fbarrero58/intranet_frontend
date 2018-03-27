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

}
