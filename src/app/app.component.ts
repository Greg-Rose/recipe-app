import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCV9JP4KGe798-P33P7h1T0yLwv09Ysma8",
      authDomain: "recipe-app-43688.firebaseapp.com"
    });
  }
}
