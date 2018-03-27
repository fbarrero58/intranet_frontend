import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../../models/empresa.models';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';


Empresa

declare var $;

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styles: []
})
export class EmpresasComponent implements OnInit {
  empresas: any;

  constructor(public _us: UsuarioService) { }
  

  ngOnInit() {
      this._us.todos_empresas()
              .subscribe( (resp:any) => {
                this.empresas = resp.empresas;
                this.listar_empresas();
                console.log(resp);
              });
  }


  listar_empresas(){
    let info_empresas = [];
    let data_aux;
    this.empresas.forEach(element => {
      data_aux = [
        element.id,
        element.nombre,
        element.codigo,
        element.tipo_empresa,
        '<button type="button" class="btn waves-effect waves-light btn-sm btn-info edit">Ver Más</button>'
      ];
      info_empresas.push(data_aux);
    });
    var table = $('#tabla_empresas').DataTable({
                  "language": {
                        "url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
                    },
                    dom: 'Bfrtip',
                    data: info_empresas,
                    buttons: [
                        'excel', 'pdf'
                    ]
                });

    table.on('click', '.edit', function() {
      var seleccion = $(this).closest('tr');
      var data = table.row(seleccion).data();
      window.location.href = "../#/admin/empresas/detalle/"+data[0];
    });
  }

}
