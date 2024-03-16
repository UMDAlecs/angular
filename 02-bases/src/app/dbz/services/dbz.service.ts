import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Godku',
      power: 100000,
    },
    {
      id: uuid(),
      name: 'Vergueta',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'El pelon',
      power: 2,
    },
  ];

  addCharacter( character: Character ): void {
    const newCharacter = {
      id : uuid(),
      ...character
    };

    this.characters.push(newCharacter);
  }

  deleteCharacterById( id: string ): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
