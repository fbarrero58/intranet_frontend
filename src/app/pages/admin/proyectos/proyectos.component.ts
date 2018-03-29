import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../../services/proyecto/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralesService } from '../../../services/generales.service';
import { NgForm } from '@angular/forms';

declare var $;

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: []
})
export class ProyectosComponent implements OnInit {

  proyectos: any;

  constructor(public _ps: ProyectoService) { }

  ngOnInit() {
    this._ps.todos_proyectos()
    .subscribe( (resp:any) => {
      console.log(resp);
      this.proyectos = resp.proyectos;
      this.listar_proyectos();
      console.log(this.proyectos);
     /* this.cargando = false;*/
    });
   
  }

  listar_proyectos(){
    let info_proyectos = [];
    let data_aux;
    this.proyectos.forEach(element => {
      data_aux = [
        element.id,
        element.nombre,
        element.codigo,
        element.empresa,
        element.tipo_servicio,
        element.fecha_inicio,
        element.fecha_fin,
        '<button type="button" class="btn waves-effect waves-light btn-sm btn-info edit">Ver Más</button>'
      ];
      info_proyectos.push(data_aux);
    });
    var table = $('#tabla_proyectos').DataTable({
                  "language": {
                        "url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
                    },
                    dom: 'Bfrtip',
                    data: info_proyectos,
                    buttons: [
                        'excel', 'pdf'
                    ]
                });

    table.on('click', '.edit', function() {
      var seleccion = $(this).closest('tr');
      var data = table.row(seleccion).data();
      window.location.href = "../#/admin/proyectos/detalle/"+data[0];
    });
  }


}
