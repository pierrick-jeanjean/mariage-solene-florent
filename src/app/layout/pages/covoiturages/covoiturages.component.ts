import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Covoiturage {
  startLocation: string;
  startDate: Date;
  startTime: Time;
  endLocation: string;
  endDate: Date;
  endTime: Time;
  nbPassengers: number;
  nbPassengersTotal: number;
  image: string;
}

@Component({
  selector: 'app-covoiturages',
  templateUrl: './covoiturages.component.html',
  styleUrls: ['./covoiturages.component.scss'],
})
export class CovoituragesComponent implements OnInit {
  covoiturages$!: Observable<Array<Covoiturage>>;
  covoi : Map<string, Array<Covoiturage>> = new Map();
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Array<Covoiturage>>('/assets/covoiturages.json').subscribe(
      (covoiturages: Array<Covoiturage>) => {
        covoiturages.forEach(c => {
          if (this.covoi.has(c.startLocation)) {
            this.covoi.get(c.startLocation)?.push(c);
          } else {
            let t : Array<Covoiturage> = [];
            t.push(c);
            this.covoi.set(c.startLocation, t);
          }
        })
        console.log(this.covoi);
      }
    );
  }
}
