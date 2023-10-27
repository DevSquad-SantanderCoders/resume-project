import { Component, Output, EventEmitter } from '@angular/core';
import { DevsDialogComponent } from '../devs-dialog/devs-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Output() public SendDevsData = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }

  dataOutput = {
    devsData: [
      {
        name: 'Jamyle Teles',
        urlLinkedin: 'https://www.linkedin.com/in/jamyle-teles-151259235/',
        urlGithub: 'https://github.com/JamyleTeles',
        devImg: 'https://avatars.githubusercontent.com/u/104221009?v=4'
      },
      {
        name: 'Juan Salles',
        urlLinkedin: 'https://www.linkedin.com/in/juan-salles/',
        urlGithub: 'https://github.com/JuanSalles',
        devImg: 'https://media.licdn.com/dms/image/D4D03AQHd1D0W0OBCtg/profile-displayphoto-shrink_200_200/0/1691853135264?e=1703721600&v=beta&t=4alMixO8hVpMkPM0CzhCBuZZ3INAZdoEVPXcYVYe3MQ'
      },
      {
        name: 'Matheus Holanda',
        urlLinkedin: 'https://www.linkedin.com/in/matheus-holanda97/',
        urlGithub: 'https://github.com/MMatheus-Holanda',
        devImg: 'https://avatars.githubusercontent.com/u/124604568?v=4'
      },
      {
        name: 'Thayza Oliveira',
        urlLinkedin: 'https://www.linkedin.com/in/tthayza-oliveira/',
        urlGithub: 'https://github.com/tthayza',
        devImg: 'https://avatars.githubusercontent.com/u/103958727?v=4'
      }
    ],
    renderCondition: true
  }
  

  sendDevsdata() {
    this.SendDevsData.emit(this.dataOutput)
  }
 
}
