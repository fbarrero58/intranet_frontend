import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroHorasComponent } from './registro-horas/registro-horas.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { UsuarioComponent } from './admin/usuarios/usuario.component';
import { NuevoUsuarioComponent } from './admin/usuarios/nuevo-usuario.component';
import { ProyectoComponent } from './admin/proyectos/proyecto.component';
import { ProyectosComponent } from './admin/proyectos/proyectos.component';
import { NuevoProyectoComponent } from './admin/proyectos/nuevo-proyecto.component';
import { EmpresasComponent } from './admin/empresas/empresas.component';
import { EmpresaComponent } from './admin/empresas/empresa.component';
import { NuevaEmpresaComponent } from './admin/empresas/nueva-empresa.component';



const pagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Mi Perfil' } },
            { path: 'educacion', component: EducacionComponent, data: { titulo: 'Mi Educación' } },
            { path: 'experiencia', component: ExperienciaComponent, data: { titulo: 'Mi Experiencia' } },
            { path: 'experiencia/:empresa', component: ExperienciaComponent, data: { titulo: 'Mi Experiencia' } },
            { path: 'experiencia/:empresa/:cargo', component: ExperienciaComponent, data: { titulo: 'Mi Experiencia' } },
            { path: 'registro-horas', component: RegistroHorasComponent, data: { titulo: 'Registro de Horas' } },
            // Administración
            { path: 'admin/usuarios', component: UsuariosComponent, data: { titulo: 'Administración de usuarios' } },
            { path: 'admin/usuarios/detalle/:id', component: UsuarioComponent, data: { titulo: 'Información de Usuario' } },
            { path: 'admin/usuarios/nuevo', component: NuevoUsuarioComponent, data: { titulo: 'Nuevo Usuario' } },
            //Proyectos
            { path: 'admin/proyectos', component: ProyectosComponent, data: { titulo: 'Administración de Proyectos' } },
            { path: 'admin/proyectos/detalle/:id', component: ProyectoComponent, data: { titulo: 'Información de Proyecto' } },
            { path: 'admin/proyectos/nuevo', component: NuevoProyectoComponent, data: { titulo: 'Nuevo Proyecto' } },
            //Empresas
            { path: 'admin/empresas', component: EmpresasComponent, data: { titulo: 'Administración de Empresas' } },
            { path: 'admin/empresas/detalle/:id', component: EmpresaComponent, data: { titulo: 'Información de Empresa' } },
            { path: 'admin/empresas/nuevo', component: NuevaEmpresaComponent, data: { titulo: 'Nueva Empresa' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ] 
    },
    
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
