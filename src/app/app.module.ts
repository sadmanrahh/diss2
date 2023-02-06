

import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FirebaseCrudComponent } from './firebase-crud/firebase-crud.component';
import { FormsModule } from '@angular/forms';
import { FirebaseCrudadminComponent } from './firebase-crudadmin/firebase-crudadmin.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent, FirebaseCrudComponent, FirebaseCrudadminComponent],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatFormFieldModule
   
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}