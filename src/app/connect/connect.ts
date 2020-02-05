import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.html',
  // styleUrls: ['styles.css']
})
export class ConnectComponent implements OnInit {
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