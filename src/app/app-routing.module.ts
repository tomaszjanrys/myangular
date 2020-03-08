import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularcliComponent } from './angularcli/angularcli.component';
import { JavascriptbasicComponent } from './javascriptbasic/javascriptbasic.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'angularcli', component: AngularcliComponent },
  { path: 'javascript', component: JavascriptbasicComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
