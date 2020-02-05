import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutMeComponent } from './about-me/about-me';
import { ProjectsComponent } from './projects/projects';
import { SkillsComponent } from './skills/skills';
import { ResumeComponent } from './resume/resume';
import { ConnectComponent } from './connect/connect';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'connect', component: ConnectComponent },
];

@NgModule({
 exports: [ RouterModule ],
 imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
