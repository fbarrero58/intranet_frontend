import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';


declare var swal;

@Injectable()
export class UsuarioService {

  setear: boolean = false;
  usuario: any;
  token: string = "";
  info_usuario: any;
  empresas_usuario: any;
  empresa: any;
  cargando: boolean = false;

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
    this.cargando = true;
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
            })
            .catch( err => {
              swal("Error al iniciar Sesión", err.error.mensaje, "error");
              this.cargando = false;
              return Observable.throw( err );
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

    return this.http.put(url,objeto)
     .map( (resp:any) => {
              if(resp.err){
                swal("Ocurrio un error", resp.mensaje, "error");
              }else{
                //localStorage.removeItem("info_usuario");
                swal("Listo!", resp.mensaje, "success");
              }
              return true;
            });
  }

  crear_empresa(empresa:any){
    let url = URL_SERVICIOS + 'experiencia/empresa/?token='+this.token;
    let objeto = {
      'id_usuario': this.info_usuario.id_usuario,
      'nombre': empresa.nombre,
      'industria': empresa.industria
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

  todos_empresas(){
    let url = URL_SERVICIOS + 'empresas/?token=' + this.token;
    return this.http.get(url);

  }

  traer_info_usuario(id_usuario){
    this.cargando = true;
    let url = URL_SERVICIOS + 'usuarios/'+id_usuario+'/?token=' + this.token;
    return this.http.get(url)
                    .map( (resp:any) => {
                      this.cargando = false;
                      return resp.Usuarios[0];
                    });
  }

  traer_info_empresa(id_empresa){
    let url = URL_SERVICIOS + 'empresas/'+id_empresa+'/?token=' + this.token;
    console.log (url);
    return this.http.get(url)
                    .map( (resp:any) => {
                      return resp.empresa[0];
                    });
  }




 traer_empresa(){
    let url = URL_SERVICIOS + 'experiencia/'+ this.info_usuario.id_usuario +'?token='+this.token;
    return this.http.get(url)
                    .map( (resp:any) => {             
                     return resp;
                    });                 
  }

  traer_cargo(id_empresa: any){
    let url = URL_SERVICIOS + 'experiencia/'+ this.info_usuario.id_usuario +'?token='+this.token;
    return this.http.get(url)
                    .map( (resp:any) => {             
                     return resp;
                    });                 
  }

  modificar_empresa(empresa:any, id_empresa: any){
    let url = URL_SERVICIOS + 'experiencia/empresa/'+ id_empresa.id +'?token='+this.token;
    let objeto = {
      'id_usuario': this.info_usuario.id_usuario,
      'nombre': empresa.nombre_mod,
      'industria': empresa.industria_mod
  }

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

  modificar_cargo(cargo:any, id_cargo: any){
    let url = URL_SERVICIOS + 'experiencia/empresa/'+ id_cargo.id +'?token='+this.token;
    let objeto = {
      'id_empresa': this.info_usuario.id_usuario,
      'nombre': cargo.cargo_mod,
      'fecha_inicio': cargo.fecha_inicio_mod,
      'fecha_fin': cargo.fecha_fin_mod
  }

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


  eliminar_empresa(empresa: any){

    let url = URL_SERVICIOS + 'experiencia/empresa/'+ empresa +'?token='+this.token;
        console.log("enlace", url);
        return this.http.delete(url)

    .map( (resp:any) => {
             if(resp.err){
               swal("Ocurrio un error", resp.mensaje, "error");
             }else{            
               swal("Listo!", resp.mensaje, "success");
             }
             return true;
           });  
  }

  crear_cargo(cargo:any, empresa: any){
    let url = URL_SERVICIOS + 'experiencia/cargo/?token='+this.token;
    let objeto = {
      'id_empresa': empresa,
      'nombre': cargo.cargo,
      'fecha_inicio': '2017-02-02',
      'fecha_fin': '2018-02-02'
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

  crear_usuario(usuario){
    this.cargando = true;
    let url = URL_SERVICIOS + 'usuarios/?token='+this.token;
    return this.http.post(url,usuario)
                    .map( (resp:any) => {
                      swal("Listo!", resp.mensaje, "success");
                      this.cargando = false;
                      return true;
                    })
                    .catch( err => {
                      swal('Usuario invalido',err.error.mensaje,'error');
                      this.cargando = false;
                      return Observable.throw(err);
                    })
  }





}
