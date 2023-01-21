import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() pokemon$: Observable<User[]>;
  @Output() pokemonEmitter = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  selectPokemon(pokemon: User) {
    this.pokemonEmitter.emit(pokemon);
  }
}