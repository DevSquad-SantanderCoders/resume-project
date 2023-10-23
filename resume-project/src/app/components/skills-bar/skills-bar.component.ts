import { Component, Input } from '@angular/core';
import { skillData } from 'src/app/models/skill-data.model';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.scss'],
})
export class SkillsBarComponent {
  @Input() skill!: skillData;
}
