import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ElectricityComponent} from "./electricity/electricity.component";
import {HeatingComponent} from "./heating/heating.component";
import {WaterComponent} from "./water/water.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ElectricityDetailComponent} from "./electricity-detail/electricity-detail.component";
import {HeatingDetailComponent} from "./heating-detail/heating-detail.component";
import {WaterDetailComponent} from "./water-detail/water-detail.component";
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'electricity', component: ElectricityComponent },
  { path: 'electricity/:id', component: ElectricityDetailComponent },
  { path: 'heating/:id', component: HeatingDetailComponent },
  { path: 'water/:id', component: WaterDetailComponent },
  { path: 'heating', component: HeatingComponent },
  { path: 'water', component: WaterComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
