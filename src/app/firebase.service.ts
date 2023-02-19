import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, 
  updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db: Firestore;
  RequestCol: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(environment.firebase);
    this.db = getFirestore();
    this.RequestCol = collection(this.db, 'requests');

    // Get Realtime Data
    onSnapshot(this.RequestCol, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
  }

  async getRequests() {
    const snapshot = await getDocs(this.RequestCol);
    return snapshot;
  }


  async addRequest(name: string, status: string) {
    await addDoc(this.RequestCol, {
      name,
      status
    })
    return;
  }

  async deleteRequest(docId: string) {
    const docRef = doc(this.db, 'requests', docId)
    await deleteDoc(docRef);
    return;
  }

  async updateRequest(docId: string, name: string, status: string) {
    const docRef = doc(this.db, 'requests', docId);
    await updateDoc(docRef, { name, status })
    return;
  }
}