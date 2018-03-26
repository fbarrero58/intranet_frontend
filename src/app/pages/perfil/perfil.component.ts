import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';

declare var jQuery:any;
declare var $:any;



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  usuario:any;

  constructor( public _us: UsuarioService ) {
    this.usuario = this._us.info_usuario;
   }

  ngOnInit() {
    $('.mydatepicker').datepicker();
  }

  //datos personales
  modificar(datospersonales: NgForm){

    if( datospersonales.invalid ){
      return;
    }
  
    this._us.modificar_usuario(datospersonales.value,this.usuario)
     .subscribe( resp => {
        this._us.traer_info()
        .subscribe( resp => {});
     });
  }


//datos informacion
 modificar_info(perfil: NgForm){
  /*this._us.modificar_informacion(perfil.value,this.usuario)
  .subscribe( resp => {
     this._us.traer_info()
     .subscribe( resp => 
       console.log("informacion"+ resp)
   );

  });*/

  console.log("imprimir empresa");
}
 

}
