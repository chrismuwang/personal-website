import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  // styleUrls: ['styles.css']
})
export class ResumeComponent implements OnInit {
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