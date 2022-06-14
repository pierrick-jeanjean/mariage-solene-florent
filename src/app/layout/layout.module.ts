import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { HomeComponent } from './pages/home/home.component';
import { LogementsComponent } from './pages/logements/logements.component';
import { CovoituragesComponent } from './pages/covoiturages/covoiturages.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { PageSecreteComponent } from './pages/page-secrete/page-secrete.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivitesComponent } from './pages/activites/activites.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    PlanningComponent,
    HomeComponent,
    LogementsComponent,
    CovoituragesComponent,
    RestaurantsComponent,
    PageSecreteComponent,
    ActivitesComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    FormsModule
  ]
})
export class LayoutModule { }
