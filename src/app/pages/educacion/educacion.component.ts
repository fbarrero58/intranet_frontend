import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styles: []
})
export class EducacionComponent implements OnInit {

  modelo_estudios = [
    {
      'id': 1,
      'tipo_estudio': 'Pregrado',
      'pais': 'Colombia',
      'institucion': 'Escuela Colombiana de Ingeniería Julio Garavito',
      'titulo': 'Ingeniero de sistemas',
      'fecha_inicio': '2011-01-01',
      'fecha_fin': '2016-01-01'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
