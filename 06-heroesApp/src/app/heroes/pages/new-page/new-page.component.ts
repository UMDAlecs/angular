import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, filter, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id:               new FormControl<string>(''),
    superhero:        new FormControl<string>(''),
    publisher:        new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego:        new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters:       new FormControl<string>(''),
    alt_img:          new FormControl<string>(''),
  });


  publishers = [
    {id: 'DC Comics', desc: 'DC - comics'},
    {id: 'Marvel Comics', desc: 'Marvel - comics'},
  ]

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    if ( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(switchMap(({id}) => this.heroesService.getHeroById(id)))
      .subscribe(hero => {
        if ( !hero ) return this.router.navigateByUrl('');

        return this.heroForm.reset( hero );
      });
  }

  get currentHero(): Hero {
    return this.heroForm.value as Hero;
  }

  onDelete():void {
    if ( !this.currentHero.id ) throw Error('Hero id is required');

    const dialogRef = this.matDialog.open(DeleteDialogComponent, {
      data: this.currentHero
    });

    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.heroesService.deleteHero(this.currentHero) ),
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe(() => this.router.navigateByUrl('/heroes/list'));
  }

  onSubmit(): void{
    if ( this.heroForm.invalid ) return;

    if ( this.currentHero.id ) {

      this.heroesService.updateHero(this.currentHero)
        .subscribe(hero => {
          this.showSnackBar(`${ hero.superhero } updated!`);
        });

        return;
      }

      this.heroesService.addHero(this.currentHero)
      .subscribe(hero => {
          this.router.navigateByUrl(`/heroes/edit/${hero.id}`);
          this.showSnackBar(`${ hero.superhero } created!`);
          return;
        });
  }

  showSnackBar(message: string): void {
    this.snackbar.open( message, 'done', {
      duration: 2500
    });
  }
}
