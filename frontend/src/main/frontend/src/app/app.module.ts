import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {ElectricityComponent} from './electricity/electricity.component';
import {HeatingComponent} from './heating/heating.component';
import {WaterComponent} from './water/water.component';
import {AppRoutingModule} from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    ElectricityComponent,
    HeatingComponent,
    WaterComponent,
    DashboardComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
