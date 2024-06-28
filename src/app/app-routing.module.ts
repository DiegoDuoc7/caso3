import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AportarComponent } from './aportacion/aportar/aportar.component';
import { FormularioComponent } from './aportacion/formulario/formulario.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AportadorComponent } from './aportacion/aportador/aportador.component';
import { AportesComponent } from './aportacion/aportes/aportes.component';
import { AportadoresComponent } from './aportacion/aportadores/aportadores.component';
import { EditaraporteComponent } from './aportacion/editaraporte/editaraporte.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aportar', component: AportarComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'crear-aportador', component: AportadorComponent },
  { path: 'ver-aportes', component: AportesComponent },
  { path: 'ver-aportadores', component: AportadoresComponent },
  { path: 'editar-aporte/:id', component: EditaraporteComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
