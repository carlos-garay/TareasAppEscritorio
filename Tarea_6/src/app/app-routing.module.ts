import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EducacionComponent } from './pages/educacion/educacion.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'educacion', component: EducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
