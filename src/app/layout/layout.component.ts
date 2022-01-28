import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public menuOpened = false;

  constructor(public router: Router) {}

  public toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
