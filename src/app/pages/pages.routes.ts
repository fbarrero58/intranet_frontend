import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroHorasComponent } from './registro-horas/registro-horas.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { PerfilComponent } from './perfil/perfil.component';



const pagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Mi Perfil' } },
            { path: 'registro-horas', component: RegistroHorasComponent, data: { titulo: 'Registro de Horas' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ] 
    },
    
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
