import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {MaterialModule} from "@angular/material";
import "hammerjs";
import {AppComponent} from "./app.component";
import {ElectricityIndexesListComponent} from "./electricity/electricity-indexes-list/electricity-indexes-list.component";
import {HeatingIndexesListComponent} from "./heating/heating-indexes-list/heating-indexes-list.component";
import {WaterIndexesListComponent} from "./water/water-indexes-list/water-indexes-list.component";
import {MainDashboardComponent} from "./dashboard/main-dashboard/main-dashboard.component";

import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ElectricityIndexesListComponent,
    HeatingIndexesListComponent,
    WaterIndexesListComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
