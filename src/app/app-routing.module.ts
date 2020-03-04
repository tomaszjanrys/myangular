import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstalacjaComponent } from './instalacja/instalacja.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ChartjsComponent } from './chartjs/chartjs.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'instalacja', component: InstalacjaComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'chartjs', component: ChartjsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
