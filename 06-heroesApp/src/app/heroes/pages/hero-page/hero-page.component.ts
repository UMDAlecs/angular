import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

    ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.heroesService.getHeroById(id) )
        )
        .subscribe( ( hero ) => {
          if (!hero ) return this.router.navigateByUrl('/heroes/list');

          console.log(hero);

          return this.hero = hero;
        });
    }

    goBack(): void {
      this.router.navigateByUrl('/heroes/list');
    }

}
