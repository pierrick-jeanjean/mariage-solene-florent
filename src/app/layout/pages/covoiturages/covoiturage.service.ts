import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Covoiturage } from './covoiturage.model';

@Injectable({
  providedIn: 'root'
})
export class CovoiturageService {
  constructor(private httpClient: HttpClient) { }

  validateMail(mail: string): Observable<boolean>{
    return this.httpClient.get<boolean>('http://localhost:8080/covoitureur?mail='+mail);
  }

  loadUserCovoiturages(mail: string): Observable<Array<Covoiturage>> {
    return this.httpClient.get<Array<Covoiturage>>('http://localhost:8080/covoiturages?mail='+mail);
  }

  loadAllCovoiturages(mail: string): Observable<Array<Covoiturage>> {
    return this.httpClient.get<Array<Covoiturage>>('http://localhost:8080/covoiturages/all?mail='+mail);
  }

}
