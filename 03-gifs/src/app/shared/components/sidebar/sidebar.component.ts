import { Component, Output, EventEmitter } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private GifsService : GifsService) {
  }

  get tagsHistory () {
    return this.GifsService.tagsHistory;
  }

  searchTag ( tag : string ) {
    this.GifsService.searchTag(tag);
  }
}
