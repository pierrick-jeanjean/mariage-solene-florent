import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Covoiturage } from './covoiturage.model';
import { CovoiturageService } from './covoiturage.service';
import { SaveCovoiturage } from './save-covoiturage.model';

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

  start_location!: string;
  end_location!: string;
  start_date!: Date;
  end_date!: Date;
  aller_retour!: string;

  constructor(private covoiturageService: CovoiturageService) {}

  public validateMail() {
    this.covoiturageService
      .validateMail(this.mail)
      .subscribe((res: boolean) => {
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
      allCovoiturages: this.covoiturageService.loadAllCovoiturages(),
    }).subscribe((res: any) => {
      this.userCovoiturages = res.userCovoiturages;
      this.allCovoiturages = res.allCovoiturages;
    });
  }

  public saveCovoiturage() {
    if (
      this.aller_retour !== '' &&
      this.start_date &&
      this.end_date &&
      this.start_location !== '' &&
      this.end_location !== ''
    ) {
      let aller = this.aller_retour === 'aller' ? true : false;
      let retour = this.aller_retour === 'retour' ? true : false;
      let covoiturage = {
        covoitureur: this.mail,
        start_location: this.start_location,
        end_location: this.end_location,
        start_date: this.start_date,
        end_date: this.end_date,
        aller: aller,
        retour: retour,
      };
      this.covoiturageService.saveCovoiturage(covoiturage).subscribe(() => {
        this.loadStuff();
      });
    }
  }

  public deleteCovoiturage(id: number) {
    this.covoiturageService.deleteCovoiturage(id).subscribe(() => {
      this.loadStuff();
    });
  }
}
