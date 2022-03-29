import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public openGoogleMaps(): void {
    window.open(
      'https://www.google.com/maps/place/Le+Manoir+de+la+perdrilais/@47.7905998,-1.9552469,15z/data=!4m8!3m7!1s0x0:0xcf134a4ec6d506c5!5m2!4m1!1i2!8m2!3d47.7905994!4d-1.9552478',
      '_blank'
    );
  }
}
