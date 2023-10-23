import { Component } from '@angular/core';
import { skillData } from './models/skill-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'skills-bar';
  skillsInfo: skillData = {
    percentage: '85%',
    nameSkill: 'Angular',
  };
}
