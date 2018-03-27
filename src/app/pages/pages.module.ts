import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';
import { RegistroHorasComponent } from './registro-horas/registro-horas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { UsuarioComponent } from './admin/usuarios/usuario.component';
import { NuevoUsuarioComponent } from './admin/usuarios/nuevo-usuario.component';
import { ProyectosComponent } from './admin/proyectos/proyectos.component';
import { ProyectoComponent } from './admin/proyectos/proyecto.component';
import { NuevoProyectoComponent } from './admin/proyectos/nuevo-proyecto.component';
import { EmpresasComponent } from './admin/empresas/empresas.component';
import { EmpresaComponent } from './admin/empresas/empresa.component';
import { NuevaEmpresaComponent } from './admin/empresas/nueva-empresa.component';


@NgModule({
    
    declarations: [
        PagesComponent,
        DashboardComponent,
        RegistroHorasComponent,
        PerfilComponent,
        EducacionComponent,
        ExperienciaComponent,
        UsuariosComponent,
        UsuarioComponent,
        NuevoUsuarioComponent,
        ProyectosComponent,
        ProyectoComponent,
        NuevoProyectoComponent,
        EmpresasComponent,
        EmpresaComponent,
        NuevaEmpresaComponent
    ],
    exports:[
        PagesComponent,
        DashboardComponent ,
        RegistroHorasComponent ,
        PerfilComponent  ,
        EducacionComponent  ,
        ExperienciaComponent 
    ],
    imports:[
        BrowserModule,
        SharedModule,
        PAGES_ROUTES,
        ReactiveFormsModule,
        FormsModule
    ]

})
export class PageModule{}