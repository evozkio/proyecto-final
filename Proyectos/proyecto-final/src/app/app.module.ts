import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PrimerProyectoComponent } from './components/primer-proyecto/primer-proyecto.component';
import { CabeceraComponent } from './components/primer-proyecto/components/cabecera/cabecera.component'
import { BuscadorComponent } from './components/primer-proyecto/components/buscador/buscador.component'

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    PaginaPrincipalComponent,
    PrimerProyectoComponent,
    BuscadorComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
