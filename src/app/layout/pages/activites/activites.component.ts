import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss'],
})
export class ActivitesComponent implements AfterViewInit {
  circuit1 = [
    { path: './assets/menhirs-monteneuf.jpg' },
    { path: './assets/foret-broceliande.jpg' },
  ];
  circuit2 = [
    { path: './assets/becherel.jpg' },
    { path: './assets/saint-suliac.jpg' },
    { path: './assets/cote-emeraude.jpg' },
  ];
  plages = [
    { path: './assets/plage-dinard.jpg' },
    { path: './assets/plage-saint-lunaire.jpg' },
    { path: './assets/plage-saint-briac.jpg' },
    { path: './assets/plage-lancieux.jpg' },
  ];

  public carouselWidth = 0;
  public carouselHeight = 0;

  circuit1Text = 'Les menhirs de Monteneuf';
  circuit2Text = 'Bécherel';
  plagesText = 'Plage de Dinard';
  showCarousels = false;

  @ViewChild('test') elementView!: ElementRef;

  ngAfterViewInit(): void {
    let sectionWidth = this.elementView.nativeElement.offsetWidth;
    let ratioHeight = sectionWidth / 1.5;
    this.carouselHeight = (ratioHeight * 0.75) < (this.elementView.nativeElement.offsetWidth * 0.75) ? (ratioHeight * 0.75) : (this.elementView.nativeElement.offsetWidth * 0.75);
    if (this.carouselHeight <= 200) {
      this.carouselHeight = 200;
    }
    if (this.carouselHeight >= 500) {
      this.carouselHeight = 500;
    }
    this.showCarousels = true;
  }
}
