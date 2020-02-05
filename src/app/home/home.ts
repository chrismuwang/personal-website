import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  // styleUrls: ['styles.css']
})
export class HomeComponent implements OnInit {
  phoneView: boolean;

  constructor() {
    this.phoneView = true;
  }

  ngOnInit() {
  }

  changeView(){
    this.phoneView = true;
  }

}