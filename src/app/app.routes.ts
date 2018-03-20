import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NuevapassComponent } from './nuevapass/nuevapass.component';



const appRoutes: Routes = [
    
    { path: 'login', component: LoginComponent },
    { path: 'nuevapass/:id', component: NuevapassComponent },
    { path: '**', component: NopagefoundComponent }
   
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes , { useHash: true });
