import {
    Auth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from '@angular/fire/auth';
  
  import { Injectable } from '@angular/core';
  import { LoginData } from '../interfaces/login-data.interface';
  
  @Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    constructor(private auth: Auth) {}
  
    login({ email, password }: LoginData) {
      return signInWithEmailAndPassword(this.auth, email, password);
    }
  
    loginWithGoogle() {
      return signInWithPopup(this.auth, new GoogleAuthProvider());
    }
  
  
    logout() {
      return signOut(this.auth);
    }
  }