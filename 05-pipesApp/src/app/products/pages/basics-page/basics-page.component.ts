import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower: string = 'alejandro';
  public nameUpper: string = 'ALEJANDRO';
  public fullName: string = 'aLejAnDro floREs';

  public customDate: Date = new Date();
}
