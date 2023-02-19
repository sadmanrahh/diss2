import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Observable, Subject, filter, takeUntil, tap } from 'rxjs';

import { FormComponent } from './components/form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { SellFirestoreService } from 'src/app/core/sell-firestore.service';
import { Pokemon } from '../seller/interfaces/seller.interface';
import { orderBy } from '@firebase/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})

export class CharComponent implements OnInit {
  allPokemon$: Observable<Pokemon[]>;
  selectedPokemon?: Pokemon;
  destroyed$ = new Subject<void>();
  
  searchText:any;

  
 
  constructor(
    private readonly pokedexService: SellFirestoreService,
    private readonly dialog: MatDialog
    
  ) {}
  ngOnInit(): void {
    this.allPokemon$ = this.pokedexService.getAll(), orderBy('type', 'desc');
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