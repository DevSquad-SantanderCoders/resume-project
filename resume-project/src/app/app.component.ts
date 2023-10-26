import { Component } from '@angular/core';
import { Candidate } from './components/models/candidate-data.model';
import { skillData } from './components/models/skill-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public candidate: Candidate = {
    name: 'calabreso',
    tel: '44444444',
    email: 'calabreso@matchupitchu.com',
    img: 'https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-bonita-em-pe-na-parede-cinza_231208-10760.jpg?w=1380&t=st=1698276894~exp=1698277494~hmac=f8e4cd2a0d7faedc2705f2de113b72d8b37cb49509bc47f15bd2bb4190c2fa28',
  };
  skillsInfo: skillData = {
    percentage: '85%',
    nameSkill: 'Angular',
  };
}
