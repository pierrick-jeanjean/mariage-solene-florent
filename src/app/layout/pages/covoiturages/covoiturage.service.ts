import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Covoiturage } from './covoiturage.model';
import { SaveCovoiturage } from './save-covoiturage.model';

@Injectable({
  providedIn: 'root'
})
export class CovoiturageService {

  serverUrl = 'https://mariage-solene-florent-api.azurewebsites.net';

  constructor(private httpClient: HttpClient) { }

  validateMail(mail: string): Observable<boolean>{
    return this.httpClient.get<boolean>(this.serverUrl + '/covoitureur?mail='+mail);
  }

  loadUserCovoiturages(mail: string): Observable<Array<Covoiturage>> {
    return this.httpClient.get<Array<Covoiturage>>(this.serverUrl + '/covoiturages/'+mail);
  }

  loadAllCovoiturages(): Observable<Array<Covoiturage>> {
    return this.httpClient.get<Array<Covoiturage>>(this.serverUrl + '/covoiturages');
  }

  saveCovoiturage(covoiturage: SaveCovoiturage): Observable<void> {
    return this.httpClient.post<void>(this.serverUrl + '/covoiturages', covoiturage);
  }

  deleteCovoiturage(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.serverUrl + '/covoiturages/'+id);
  }

}
