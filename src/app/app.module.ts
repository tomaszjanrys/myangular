import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InstalacjaComponent } from './instalacja/instalacja.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ChartjsComponent } from './chartjs/chartjs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InstalacjaComponent,
    BootstrapComponent,
    ChartjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
