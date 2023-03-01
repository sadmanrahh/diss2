import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { Items } from '../../interfaces/seller.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() item$: Observable<Items[]>;
  @Output() itemEmitter = new EventEmitter<Items>();

  constructor() {}

  ngOnInit(): void {}

  selectItems(item: Items) {
    this.itemEmitter.emit(item);
  }
}
