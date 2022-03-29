import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Covoiturage {
  startLocation: string,
  startDate: Date,
  startTime: Time,
  endLocation: string,
  endDate: Date,
  endTime: Time,
  nbPassengers: number;
  nbPassengersTotal: number;
  image: string;
}

@Component({
  selector: 'app-covoiturages',
  templateUrl: './covoiturages.component.html',
  styleUrls: ['./covoiturages.component.scss']
})
export class CovoituragesComponent implements OnInit {

  covoiturages$!: Observable<Array<Covoiturage>>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.covoiturages$ = this.httpClient.get<Array<Covoiturage>>('/assets/covoiturages.json');
  }

}
