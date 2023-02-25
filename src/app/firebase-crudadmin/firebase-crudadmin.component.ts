
import { Component, OnInit } from '@angular/core';
import { DocumentData, QuerySnapshot } from '@firebase/firestore';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-firebase-crud',
  templateUrl: './firebase-crudadmin.component.html',
  styleUrls: ['./firebase-crudadmin.component.scss']
})
export class FirebaseCrudadminComponent implements OnInit {

  CharityDetails = {
    name: '',
    status: ''
  }
  CharityCollectiondata: { id: string, name: string, status: string }[] | any = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.get();
    this.firebaseService.obsr_UpdatedSnapshot.subscribe((snapshot) => {
      this.updateCharityCollection(snapshot);
    })
  }

  async add() {
    const { name, status, } = this.CharityDetails;
    await this.firebaseService.addRequest(name, status);
    this.CharityDetails.name = "";
    this.CharityDetails.status = ""; 
    this.CharityDetails.status = "";
    
  }

  async get() {
    const snapshot = await this.firebaseService.getRequests();
    this.updateCharityCollection(snapshot);
  }

  updateCharityCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.CharityCollectiondata = [];
    snapshot.docs.forEach((request) => {
      this.CharityCollectiondata.push({ ...request.data(), id: request.id });
    })
  }

  async delete(docId: string) {
    await this.firebaseService.deleteRequest(docId);
  }

  async update(docId: string, name: HTMLInputElement, status: HTMLInputElement) {
    await this.firebaseService.updateRequest(docId, name.value, status.value);
  }

}
