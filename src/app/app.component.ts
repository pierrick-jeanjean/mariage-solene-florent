import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  template: `
    <ngx-spinner
      bdColor="#006338"
      size="large"
      color="#b36700"
      type="ball-newton-cradle"
      [fullScreen]="true"
      [disableAnimation]="disableAnimation"
    >
      <p style="color: #ffffd4; font-size: 24px;">Chargement...</p>
    </ngx-spinner>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  
  disableAnimation = true;
  
  constructor(private ngxSpinnerService: NgxSpinnerService) {
    this.ngxSpinnerService.show();
  }
  
  ngOnInit() {
    setTimeout(() => {
      this.disableAnimation = false;
      this.ngxSpinnerService.hide();
    }, 2000);
  }
}
