import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre: string = 'iron man';
  public edad: number = 30;

  get capitalizedName() : string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription() : string {
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero(): void {
    this.nombre = 'spider man';
  }

  changeAge(): void{
    this.edad = 18;
  }

  resetForm(): void{
    this.nombre = 'iron man';
    this.edad = 30;
  }
}
