import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Database, set, ref, update } from '@angular/fire/database';
import { Router } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.5201949, lng: -0.1000908},
      zoom: 14
    });

    const shop1 = new google.maps.Marker({
      position: {lat: 51.521766, lng: -0.104017},
      map: map,
      title: 'Shop 1'
    });

    const shop2 = new google.maps.Marker({
      position: {lat: 51.518880, lng: -0.150888},
      map: map,
      title: 'Shop 2'
    });
  }

}