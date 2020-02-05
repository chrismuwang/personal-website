import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  // styleUrls: ['styles.css']
})
export class ProjectsComponent implements OnInit {
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