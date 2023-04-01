import { Component, OnInit } from '@angular/core';
import { Observable, Subject, filter, takeUntil, tap } from 'rxjs';

import { FormComponent } from './components/form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { SellFirestoreService } from 'src/app/core/sell-firestore.service';
import { Items } from './interfaces/seller.interface';
import { orderBy } from '@firebase/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class ItemsComponent implements OnInit {
  allItems$: Observable<Items[]>;
  selectedItems?: Items;
  destroyed$ = new Subject<void>();

  constructor(
    private readonly SellService: SellFirestoreService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.allItems$ = this.SellService.getAll().pipe(
      map(items => [...(items || [])].sort((a, b) => a.type.localeCompare(b.type)))
      );
    }

  addItems() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((item) => this.SellService.create(item)),
        tap((item) => this.allItems$.toPromise().then(items => item.unshift(item))),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  updateItems() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...this.selectedItems },
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((item) => this.SellService.update(item)),
        tap((item) => this.selectItems(item)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  selectItems(item: Items) {
    this.selectedItems = item;
  }

  deleteItems() {
    this.SellService.delete(this.selectedItems!.id);
    this.selectedItems = undefined;
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}