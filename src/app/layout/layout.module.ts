import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { HomeComponent } from './pages/home/home.component';
import { LogementsComponent } from './pages/logements/logements.component';


@NgModule({
  declarations: [
    LayoutComponent,
    PlanningComponent,
    HomeComponent,
    LogementsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
