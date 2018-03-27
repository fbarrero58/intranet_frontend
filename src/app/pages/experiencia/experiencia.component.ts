import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { LoginComponent } from '../../login/login.component';

declare var swal;
declare var $;

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: []
})
export class ExperienciaComponent implements OnInit {

  forma: FormGroup;
  forma_mod: FormGroup;
  forma_cargo: FormGroup;
  forma_cargo_mod: FormGroup;
  empresa: string = '';
  cargo: string = '';
  data_cargo: any;
  mostrar: boolean = false;
  empresa_seleccionada: any = {
    nombre: '',
    industria: ''
  };

   cargo_seleccionado: any = {
    nombre: '',
    fecha_inicio: '',
    fecha_fin: ''
  };


  modelo_respo = [
    {
      'id': 1,
      'descripcion': 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      'id': 2,
      'descripcion': 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      'id': 3,
      'descripcion': 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    }
  ];
  usuario:any;
  data: any;
  constructor( public ar: ActivatedRoute, public router: Router, public _us: UsuarioService ) {
    this._us.traer_empresa()
    .subscribe( (resp:any) => {
       this.data = resp;
    });

  }

  ngOnInit() {
    $('.mydatepicker').datepicker();
    this.forma = new FormGroup({
      nombre: new FormControl(),
      industria: new FormControl()
    });

    this.forma_mod = new FormGroup({
      nombre_mod: new FormControl(),
      industria_mod: new FormControl()
    });

    this.forma_cargo = new FormGroup({
      cargo: new FormControl(),
      fecha_inicio: new FormControl(),
      fecha_fin: new FormControl()
    });

    this.forma_cargo_mod = new FormGroup({
      cargo_mod: new FormControl(),
      fecha_inicio_mod: new FormControl(),
      fecha_fin_mod: new FormControl()
    });

    
  }
  ver_cargos(id_empresa){
    this._us.traer_cargo(id_empresa)
    .subscribe( (resp:any) => {
      this.empresa = id_empresa;
      this.router.navigate(['/experiencia/'+id_empresa]);
       this.data_cargo = resp.cargos;
       console.log (resp);
       console.log (resp['cargos']);
    });
  }

  ver_respon(id_cargo){
    this.cargo = id_cargo;
    this.router.navigate(['/experiencia/'+this.empresa+'/'+this.cargo]);
  }

  volver_empresas(){
    this.cargo = '';
    this.empresa = '';
  }

  volver_cargos(){
    this.cargo = '';
  }

//crear empresa
  ingresar_empresa(){
    this._us.crear_empresa(this.forma.value)
     .subscribe( resp => {
      $('#modal_empresa').modal('hide');
     });
  }

    //crear cargo
    ingresar_cargo(){
      this._us.crear_cargo(this.forma_cargo.value, this.empresa)
       .subscribe( resp => {
        $('#modal_cargos').modal('hide');
       });
    }

  ver_emp(empresa_ver){
    this.empresa_seleccionada = empresa_ver;
    console.log(this.empresa_seleccionada);
  }

  ver_cargo(cargo_ver){
    this.cargo_seleccionado = cargo_ver;
    console.log(this.cargo_seleccionado);
  }

  //modificar empresa
  modificar_empresa(){
    console.log(this.forma_mod.value);
    this._us.modificar_empresa(this.forma_mod.value, this.empresa_seleccionada)
     .subscribe( resp => {
      $('#modal_empresa_modificar').modal('hide');
     });
  }

  //modificar cargo
  modificar_cargo(){
    //console.log(this.forma_cargo_mod.value);
    this._us.modificar_cargo(this.forma_cargo_mod.value, this.cargo_seleccionado)
     .subscribe( resp => {
      //$('#modal_empresa_modificar').modal('hide');
     });
  }

  eliminar_empresa(empresa_el){
    swal({
      title: "¿Esta seguro que desea eliminar?",
      text: "Al eliminar esta empresa se borraran los cargos y las responsabilidades que tenga asociado.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

    .then((willDelete) => {
      if (willDelete) {
        this._us.eliminar_empresa(empresa_el)
        .subscribe( resp => {
         //$('#modal_empresa_modificar').modal('hide');
     }); 
      } else {
        return false
      }
    });
  }





}
