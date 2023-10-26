import { Component, Input } from '@angular/core';
import { Candidate } from '../models/candidate-data.model';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss'],
})
export class InfosComponent {
  @Input() public candidate!: Candidate;
}
