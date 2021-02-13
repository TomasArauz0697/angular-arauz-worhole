import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeSessionDonwloadComponent } from './home-session-donwload/home-session-donwload.component';
import { HomeSessionDosComponent } from './home-session-dos/home-session-dos.component';
import { HomeSessionTresComponent } from './home-session-tres/home-session-tres.component';
import { HomeSessionCuatroComponent } from './home-session-cuatro/home-session-cuatro.component';
import { HomeSessionCincoComponent } from './home-session-cinco/home-session-cinco.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeSessionDonwloadComponent, HomeSessionDosComponent, HomeSessionTresComponent, HomeSessionCuatroComponent, HomeSessionCincoComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
