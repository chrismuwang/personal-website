import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home';
import { ProjectsComponent } from './projects/projects';
import { SkillsComponent } from './skills/skills';
import { ResumeComponent } from './resume/resume';
import { ConnectComponent } from './connect/connect';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ResumeComponent,
    ConnectComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

