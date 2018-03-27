import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PageModule } from './pages/pages.module';

// Servicios
import { UsuarioService } from './services/usuario/usuario.service';
import { SidebarService } from './services/sidebar.service';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { EmpresaService } from './services/empresa/empresa.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { HttpClientModule } from '@angular/common/http';

import { NuevapassComponent } from './nuevapass/nuevapass.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    NuevapassComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    PageModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UsuarioService,
    SidebarService,
    LoginGuardGuard,
    EmpresaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
