import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CovoituragesComponent } from './pages/covoiturages/covoiturages.component';
import { HomeComponent } from './pages/home/home.component';
import { LogementsComponent } from './pages/logements/logements.component';
import { PlanningComponent } from './pages/planning/planning.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'planning', component: PlanningComponent
      },
      {
        path: 'covoiturages', component: CovoituragesComponent
      },
      {
        path: 'logements', component: LogementsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
