import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AngularcliComponent } from './angularcli/angularcli.component';
import { JavascriptbasicComponent } from './javascriptbasic/javascriptbasic.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AngularcliComponent,
    JavascriptbasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
