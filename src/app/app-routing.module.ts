import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '404', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'entrenador',
    loadChildren: './components/entrenador/entrenador.module#EntrenadorModule'
  },
  {
    path: 'alumno',
    loadChildren: './components/alumno/alumno.module#AlumnoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
