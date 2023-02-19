
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Pokemon } from '../../interfaces/seller.interface';
import { orderBy } from '@firebase/firestore';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() updatePokemon = new EventEmitter<void>();
  @Output() deletePokemon = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  update() {
    this.updatePokemon.emit(), orderBy('type', 'asc');
  }
 
  delete() {
    this.deletePokemon.emit();
  }
}