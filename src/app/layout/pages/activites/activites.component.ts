import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss'],
})
export class ActivitesComponent implements AfterViewInit {
  circuit1 = [
    { path: './assets/menhirs-monteneuf.jpg' },
    { path: './assets/foret-broceliande.jpg' },
    { path: './assets/dinan.jpg'}
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
  gite = [
    { path: './assets/saint-just.jpg' },
    { path: './assets/la-gacilly.jpg' },
  ]

  public carouselHeight = window.innerHeight - 241;

  circuit1Text = 'Les menhirs de Monteneuf';
  circuit2Text = 'Bécherel';
  plagesText = 'Plage de Dinard';
  showCarousels = false;

  carousel1active = true;
  carousel2active = false;
  carousel3active = false;
  carousel4active = false;

  @ViewChild('test') elementView!: ElementRef;
  images!: Array<any>;
  
  ngAfterViewInit(): void {
    this.showCarousels = true;
  }

  displayCarousel1() {
    this.carousel1active = true;
    this.carousel2active = false;
    this.carousel3active = false;
    this.carousel4active = false;
  }
  displayCarousel2() {
    this.carousel1active = false;
    this.carousel2active = true;
    this.carousel3active = false;
    this.carousel4active = false;
  }
  displayCarousel3() {
    this.carousel1active = false;
    this.carousel2active = false;
    this.carousel3active = true;
    this.carousel4active = false;
  }
  displayCarousel4() {
    this.carousel1active = false;
    this.carousel2active = false;
    this.carousel3active = false;
    this.carousel4active = true;
  }
  
}
