import { Component, Input } from '@angular/core';
import { skillData } from '../models/skill-data.model';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss'],
})
export class SkillComponentComponent {
  @Input() skill!: skillData;
}
