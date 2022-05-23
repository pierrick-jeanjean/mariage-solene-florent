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

  public carouselHeight = window.innerHeight - 246;

  circuit1Text = 'Les menhirs de Monteneuf';
  circuit2Text = 'Bécherel';
  plagesText = 'Plage de Dinard';
  showCarousels = false;

  carousel1active = true;
  carousel2active = false;
  carousel3active = false;

  @ViewChild('test') elementView!: ElementRef;
  images!: Array<any>;
  
  ngAfterViewInit(): void {
    this.showCarousels = true;
  }

  activateCarousel1() {
    this.carousel1active = true;
    this.carousel2active = false; 
    this.carousel3active = false;
    this.images = this.circuit1;
  }
  activateCarousel2() {
    this.carousel1active = false;
    this.carousel2active = true; 
    this.carousel3active = false;
    this.images = this.circuit2;
  }
  activateCarousel3() {
    this.carousel1active = false;
    this.carousel2active = false; 
    this.carousel3active = true;
    this.images = this.plages;
  }
}
