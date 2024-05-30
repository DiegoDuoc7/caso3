import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AportadorComponent } from './aportacion/aportador/aportador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AportarComponent } from './aportacion/aportar/aportar.component';
import { FormularioComponent } from './aportacion/formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    FooterComponent,
    AportadorComponent,
    AportarComponent,
    FormularioComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
