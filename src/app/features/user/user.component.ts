import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Observable, Subject, filter, takeUntil, tap } from 'rxjs';

import { FormComponent } from './components/form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { SellFirestoreService } from 'src/app/core/sell-firestore.service';
import { Pokemon } from '../seller/interfaces/seller.interface';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html', 
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  allPokemon$: Observable<Pokemon[]>;
  selectedPokemon?: Pokemon;
  destroyed$ = new Subject<void>();

  constructor(
    private readonly pokedexService: SellFirestoreService,
    private readonly dialog: MatDialog,
    
  ) {}

  ngOnInit(): void {
    this.allPokemon$ = this.pokedexService.getAll();
  }

  addPokemon() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((pokemon) => this.pokedexService.create(pokemon)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  updatePokemon() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...this.selectedPokemon },
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((pokemon) => this.pokedexService.update(pokemon)),
        tap((pokemon) => this.selectPokemon(pokemon)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  deletePokemon() {
    this.pokedexService.delete(this.selectedPokemon!.id);
    this.selectedPokemon = undefined;
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
  
}

