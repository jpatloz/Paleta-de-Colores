import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './vistas/lista-alumnos/lista-alumnos.component';
import { FormAlumnoComponent } from './vistas/form-alumno/form-alumno.component';

const routes: Routes = [
  {path: '', component: ListaAlumnosComponent},
  {path: '/editAlumno/:documentId', component: FormAlumnoComponent},
  {path: 'creaAlumno', component: FormAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
