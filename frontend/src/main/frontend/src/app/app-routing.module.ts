import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MainDashboardComponent} from "./dashboard/main-dashboard/main-dashboard.component";
import {ElectricityIndexesListComponent} from "./electricity/electricity-indexes-list/electricity-indexes-list.component";
import {HeatingIndexesListComponent} from "./heating/heating-indexes-list/heating-indexes-list.component";
import {WaterIndexesListComponent} from "./water/water-indexes-list/water-indexes-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: MainDashboardComponent},
  {path: 'electricity', component: ElectricityIndexesListComponent},
  {path: 'heating', component: HeatingIndexesListComponent},
  {path: 'water', component: WaterIndexesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
