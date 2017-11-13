import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Output() itemSelected = new EventEmitter<string>();
  item;

  constructor() { }

  ngOnInit() {
  }

  toggleItems(item: string) {
    console.log(item);
    this.itemSelected.emit(item);
  }

}
