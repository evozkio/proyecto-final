import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PrimerProyectoComponent } from './components/primer-proyecto/primer-proyecto.component';

const routes: Routes = [
  {path: '' , component: PaginaPrincipalComponent},
  {path: 'primer-proyecto' , component: PrimerProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
