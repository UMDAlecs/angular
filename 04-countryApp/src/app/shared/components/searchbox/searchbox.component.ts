import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [
  ]
})
export class SearchboxComponent implements OnInit, OnDestroy {

  private debouncer = new Subject<string>();
  private debouncerSubscription? : Subscription;

  @Input()
  public placeholder : string = '';

  @Input()
  public initialValue : string = '';

  @Output()
  public OnValue = new EventEmitter<string>();

  @Output()
  public OnDebounce = new EventEmitter<string>();

  @ViewChild('searchInput')
  public searchInput! : ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(600)
    )
    .subscribe(
      value => {
        this.OnDebounce.emit(value);
      }
    )
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe;
  }

  emitValue(){
    this.OnValue.emit(this.searchInput.nativeElement.value);
  }

  onKeyPress( inputValue : string ) {
    this.debouncer.next( inputValue );
  }
}
