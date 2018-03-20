import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroHorasComponent } from './registro-horas/registro-horas.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';



const pagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'registro-horas', component: RegistroHorasComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ] 
    },
    
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
