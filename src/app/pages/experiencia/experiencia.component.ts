import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: []
})
export class ExperienciaComponent implements OnInit {

  empresa: string = '';
  cargo: string = '';
  mostrar: boolean = false;

  modelo_empresa = [
    {
      'id': 1,
      'nombre': 'Nombre de la empresa 1',
      'industria': 'Industria Número 1'
    },
    {
      'id': 2,
      'nombre': 'Nombre de la empresa 2',
      'industria': 'Industria Número 2'
    }
  ];

  modelo_cargos = [
    {
      'id': 1,
      'nombre': 'Cargo 1 - Empresa 1',
      'fecha_inicio': '2017-12-12',
      'fecha_fin': '2018-12-12'
    },
    {
      'id': 2,
      'nombre': 'Cargo 2 - Empresa 1',
      'fecha_inicio': '2017-12-12',
      'fecha_fin': '2018-12-12'
    },
    {
      'id': 3,
      'nombre': 'Cargo 3 - Empresa 1',
      'fecha_inicio': '2017-12-12',
      'fecha_fin': '2018-12-12'
    },
  ];

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

  constructor( public ar: ActivatedRoute, public router: Router ) {

    this.ar.params.subscribe( params => {
      this.empresa = params['empresa'];
      this.cargo = params['cargo'];
    });

  }

  ngOnInit() {
  }

  ver_cargos(id_empresa){
    this.empresa = id_empresa;
    this.router.navigate(['/experiencia/'+id_empresa]);
    
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

}
