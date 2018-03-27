import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  modelo_sidebar = [
    {
      'nombre': 'Administración',
      'imagen': 'mdi mdi-gauge',
      'url': '',
      'hijos': [
        {
          'nombre': 'Usuarios',
          'url': '/admin/usuarios'
        },
        {
          'nombre': 'Proyectos',
          'url': '/admin/proyectos'
        },
        {
          'nombre': 'Empresas',
          'url': '/admin/empresas'
        }
      ]
    }
  ];

  constructor() { }

}
