import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shader/header/header.component';
import { FooterComponent } from './shader/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { Portafolio2Component } from './pages/portafolio2/portafolio2.component';
import { Portafolio3Component } from './pages/portafolio3/portafolio3.component';
import { Portafolio4Component } from './pages/portafolio4/portafolio4.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    Portafolio2Component,
    Portafolio3Component,
    Portafolio4Component,
    PricingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
