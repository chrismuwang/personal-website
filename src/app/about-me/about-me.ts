import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.html',
  // styleUrls: ['./about-me.css'],
})

@NgModule({
  imports: [NgbModule]
})

export class AboutMeComponent implements OnInit {
  images = ['assets/images/space.jpg'];
  phoneView: boolean;

  constructor() {
    this.phoneView = false;
  } 

  ngOnInit() {
  }

  changeView(){
    this.phoneView = true;
  }
}