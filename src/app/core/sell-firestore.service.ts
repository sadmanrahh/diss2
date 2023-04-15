import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from '../features/seller/interfaces/seller.interface';


@Injectable({
  providedIn: 'root',
})
export class SellFirestoreService {
  private itemsCollection: CollectionReference<DocumentData>;   

  constructor(private readonly firestore: Firestore) {    
    this.itemsCollection = collection(this.firestore, 'items');        
  }

  getAll() {      
    return collectionData(this.itemsCollection, {
      idField: 'id',
    }) as Observable<Items[]>;
  }

  get(id: string) {        
    const itemsDocumentReference = doc(this.firestore, `items/${id}`);
    return docData(itemsDocumentReference, { idField: 'id' });
    
  }

  create(items: Items) {     
    return addDoc(this.itemsCollection, items);
  }

  update(items: Items) {     
    const itemsDocumentReference = doc(
      this.firestore,
      `items/${items.id}`
    );
    return updateDoc(itemsDocumentReference, { ...items });
  }

  delete(id: string) {         
    const itemsDocumentReference = doc(this.firestore, `items/${id}`);
    return deleteDoc(itemsDocumentReference);
  }
}

