import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {ElectricityComponent} from './electricity/electricity.component';
import {HeatingComponent} from './heating/heating.component';
import {WaterComponent} from './water/water.component';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ElectricityService } from './service/electricity.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ElectricityDetailComponent } from './electricity-detail/electricity-detail.component';
import { ElectricityChartComponent } from './electricity-chart/electricity-chart.component';
import { WaterChartComponent } from './water-chart/water-chart.component';
import { HeatingChartComponent } from './heating-chart/heating-chart.component';
import { WaterDetailComponent } from './water-detail/water-detail.component';
import { HeatingDetailComponent } from './heating-detail/heating-detail.component';
import { WaterService } from './service/water.service';
import { HeatingService } from './service/heating.service';


@NgModule({
  declarations: [
    AppComponent,
    ElectricityComponent,
    HeatingComponent,
    WaterComponent,
    DashboardComponent,
    ElectricityDetailComponent,
    ElectricityChartComponent,
    WaterChartComponent,
    HeatingChartComponent,
    WaterDetailComponent,
    HeatingDetailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [ElectricityService, WaterService, HeatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
