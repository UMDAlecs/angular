import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-searchbar',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #TxtTagInput
  >
  `
})
export class SearchbarComponent {

  @ViewChild('TxtTagInput')
  public tagInput! : ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) {
  }


  searchTag() {
    const tagInput = this.tagInput.nativeElement.value;

    console.log({tagInput});

    this.GifsService.searchTag(tagInput);

    this.tagInput.nativeElement.value = '';
  }
}
