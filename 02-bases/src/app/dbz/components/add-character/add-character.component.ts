import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    this.onNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    }
  }

}
