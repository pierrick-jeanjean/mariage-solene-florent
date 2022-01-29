import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.scss']
})
export class LogementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

}
