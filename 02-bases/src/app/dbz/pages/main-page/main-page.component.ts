import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  constructor( private dbzService: DbzService ) {}

  get characters() : Character[] {
    return [...this.dbzService.characters];
  }

  onNewCharacter( character: Character ) {
    this.dbzService.addCharacter(character);
  }

  onDeleteCharacter( id : string ) {
    this.dbzService.deleteCharacterById(id);
  }
}
