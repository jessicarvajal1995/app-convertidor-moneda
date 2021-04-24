import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConvertidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //para usar la etiqueta NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
