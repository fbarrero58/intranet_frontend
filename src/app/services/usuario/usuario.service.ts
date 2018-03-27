import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable'


declare var swal;

@Injectable()
export class UsuarioService {

  setear: boolean = false;
  usuario: any;
  token: string = "";
  info_usuario: any;

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

  esta_logueado(){
    return ( this.token.length > 5  )? true : false;
  }

  iniciar_sesion( usuario: Usuario, recordar: boolean = false ) {
    let url = URL_SERVICIOS + 'login';

    return this.http.post( url, usuario)
            .map( (resp:any) => {
                if( resp.setear ){
                  this.setear = true;
                  this.usuario = resp.id_usuario;
                }else{
                  this.usuario = resp.id_usuario;
                  this.token = resp.token;
                  localStorage.setItem('token',this.token);
                }
                return true;
            });
  }

  actualizar_password( password: string ){
    let url = URL_SERVICIOS + 'login';

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

  traer_info(){
    let url = URL_SERVICIOS + 'usuarios/'+this.usuario+'?token='+this.token;
    
    return this.http.get(url)
                    .map( (resp:any) => {
                      this.info_usuario = resp.Usuarios[0];
                      localStorage.setItem('info_usuario',JSON.stringify(this.info_usuario));
                      return true;
                    });
  }

  cerrar_sesion(){
    this.token = "";
    this.usuario = null;
    this.info_usuario = null;
    localStorage.removeItem("token");
    localStorage.removeItem("info_usuario");
    this.router.navigate(['/login']);
  }

  modificar_usuario(form:any, usuario: any){

    let url = URL_SERVICIOS + 'usuarios/'+ usuario.id +'?token='+this.token;

    let objeto = {
      'id_rol': usuario.id_rol,
      'cargo': usuario.cargo,
      'fecha_vinculacion': usuario.fecha_vinculacion,
      'foto': 'foto prueba',
      'perfil_profesional': usuario.perfil_profesional,
      'nombres': form.nombres,
      'apellidos': form.apellidos,
      'rut': form.rut,
      'correo_personal': usuario.correo_personal,
      'celular': form.celular,
      'fecha_nacimiento': '2018-05-08',
      'direccion': form.direccion,
      'pais_origen': form.pais_origen,
      'pais_residencia': form.pais_residencia
    }

    localStorage.removeItem("info_usuario");

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

  modificar_informacion(perfil:any,usuario: any){
    let url = URL_SERVICIOS + 'usuarios/'+ usuario.id +'?token='+this.token;
    let objeto = {
      'id_rol': usuario.id_rol,
      'cargo': usuario.cargo,
      'fecha_vinculacion': usuario.fecha_vinculacion,
      'foto': 'foto prueba',
      'perfil_profesional': perfil.perfil_profesional,
      'nombres': usuario.nombres,
      'apellidos': usuario.apellidos,
      'rut': usuario.rut,
      'correo_personal': usuario.correo_personal,
      'celular': usuario.celular,
      'fecha_nacimiento': '2018-05-08',
      'direccion': usuario.direccion,
      'pais_origen': usuario.pais_origen,
      'pais_residencia': usuario.pais_residencia
  }

  localStorage.removeItem("info_usuario");
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

  crear_empresa(empresa:any, id:any){
    let url = URL_SERVICIOS + 'experiencia/empresa/?token='+this.token;
    let objeto = {
      'id_usuario': id,
      'nombre': empresa.nombre_emp,
      'industria': empresa.industria_emp
    }

    return this.http.post(url, objeto)
                    .map( (resp:any) => {
                      if(resp.err){
                        swal("Ocurrio un error", resp.mensaje, "error");
                      }else{
                        swal("Listo!", resp.mensaje, "success");
                      }
                      return true;
                    });

  }

  todos_usuarios(){

    let url = URL_SERVICIOS + 'usuarios/?token=' + this.token;
    return this.http.get(url);

  }

  traer_info_usuario(id_usuario){
    let url = URL_SERVICIOS + 'usuarios/'+id_usuario+'/?token=' + this.token;
    return this.http.get(url)
                    .map( (resp:any) => {
                      return resp.Usuarios[0];
                    });
  }

}
