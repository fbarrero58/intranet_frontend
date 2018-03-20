import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var swal;

@Component({
  selector: 'app-nuevapass',
  templateUrl: './nuevapass.component.html',
  styleUrls: ['./nuevapass.component.css']
})
export class NuevapassComponent implements OnInit {

  correo: string = "Prueba@prueba.com";
  cargando: boolean = false;

  constructor( public _us: UsuarioService, public ar: ActivatedRoute, public router: Router ) { 
      
    this.ar.params.subscribe( params => {
      this.correo = params['id'];
    });

   }

  ngOnInit() {
  }

  enviar( forma: NgForm ){
    
    if( forma.invalid ){
      return;
    }
    
    if( forma.value.password !== forma.value.password2 ){
      swal("Error en la contraseña", "Las contraseñas no coinciden", "error");
    }else{
      this.cargando = true;
      this._us.actualizar_password(forma.value.password)
              .subscribe( resp => {
                this.cargando = false;
                this.router.navigate(['/dashboard']);
              });
    }
    
  }

}
