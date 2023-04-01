import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Items } from '../../interfaces/seller.interface';
import { orderBy } from '@firebase/firestore';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() item: Items;
  @Output() updateItems = new EventEmitter<void>();
  @Output() deleteItems = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  update() {
    this.updateItems.emit(), orderBy('type', 'asc');
  }

  delete() {
    this.deleteItems.emit();
  }

  goToWeightLink(link: string) {
    window.location.href = link;
  }
}
