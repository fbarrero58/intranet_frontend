import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';

declare var $;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: any;

  constructor(public _us: UsuarioService) { 
  }

  ngOnInit() {
    this._us.todos_usuarios()
            .subscribe( (resp:any) => {
              this.usuarios = resp.Usuarios;
              this.listar_usuarios();
              //console.log (this.usuarios );
            });
  }


  listar_usuarios(){
    let info_usuarios = [];
    let data_aux;
    this.usuarios.forEach(element => {
      data_aux = [
        element.id,
        element.nombres,
        element.apellidos,
        element.cargo,
        element.nombres,
        '<button type="button" class="btn waves-effect waves-light btn-sm btn-info edit">Ver Más</button>'
      ];
      info_usuarios.push(data_aux);
    });
    var table = $('#tabla_usuarios').DataTable({
                  "language": {
                        "url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
                    },
                    dom: 'Bfrtip',
                    data: info_usuarios,
                    buttons: [
                        'excel', 'pdf'
                    ]
                });

    table.on('click', '.edit', function() {
      var seleccion = $(this).closest('tr');
      var data = table.row(seleccion).data();
      window.location.href = "../#/admin/usuarios/detalle/"+data[0];
    });
  }

}
