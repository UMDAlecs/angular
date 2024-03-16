import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHero?: Hero;
  public heroes: Hero[] = [
    {
      name: 'Spiderman',
      age: 18
    },
    {
      name: 'Ironman',
      age: 30
    },
    {
      name: 'Thor',
      age: 1230
    },
    {
      name: 'She hulk',
      age: 28
    },
    {
      name: 'Hulk',
      age: 38
    }
  ];

  removeLastHero(): void {
    this.deletedHero = this.heroes.pop();
    console.log(this.deletedHero?.name);
  }
}

interface Hero {
  name: string;
  age: number;
}
