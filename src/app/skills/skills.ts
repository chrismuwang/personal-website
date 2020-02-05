import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  //styleUrls: ['styles.css'] 
}) 
export class SkillsComponent implements OnInit {
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