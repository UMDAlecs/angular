import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public sortBy: keyof Hero = 'name';

  toggleUpperCase() :void {
    this.isUpperCase = !this.isUpperCase;
  }

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Ironman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Wonderwoman',
      canFly: false,
      color: Color.red
    },
  ]

  changeOrder( value: keyof Hero ): void {
    this.sortBy = value;
  }
}
