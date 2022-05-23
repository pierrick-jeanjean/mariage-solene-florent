import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Covoiturage } from './covoiturage.model';
import { CovoiturageService } from './covoiturage.service';

@Component({
  selector: 'app-covoiturages',
  templateUrl: './covoiturages.component.html',
  styleUrls: ['./covoiturages.component.scss'],
})
export class CovoituragesComponent {
  public mailSet = false;
  public mail!: string;
  
  userCovoiturages!: Array<Covoiturage>;
  allCovoiturages!: Array<Covoiturage>;

  errorMessage = false;

  constructor(private covoiturageService: CovoiturageService) {}

  public validateMail() {
    this.covoiturageService.validateMail(this.mail).subscribe((res: boolean) => {
      if (res) {
        this.mailSet = res;
        this.loadStuff();
      } else {
        this.errorMessage = true;
      }
    });
  }

  public loadStuff() {
    
    forkJoin({
      userCovoiturages: this.covoiturageService.loadUserCovoiturages(this.mail),
      allCovoiturages: this.covoiturageService.loadAllCovoiturages()
    }).subscribe(
      (res:any) => {
        this.userCovoiturages = res.userCovoiturages
        this.allCovoiturages = res.allCovoiturages
      }
    )
  
  }

  public addCovoiturage() {
    
  }
}
