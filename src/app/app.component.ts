import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { Candidate } from './models/candidate-data.model';
import { IContent } from './models/content-data.model';
import { skillData } from './models/skill-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}
  experiences: IContent[] = [
    {
      subtitle: 'Company | Occupation 20XX - Now',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dapibus lacus, nec rutrum orci. Ut interdum eleifend lectus quis convallis. Maecenas in imperdiet purus. Suspendisse posuere nulla in suscipit aliquam. Praesent semper varius urna non tempor. Integer magna ex, convallis nec rhoncus sed, placerat a felis. Fusce neque arcu, accumsan quis auctor ut, mattis vel urna. Quisque pharetra metus mauris, ac laoreet diam lacinia non.',
    },
    {
      subtitle: 'Company | Occupation 20XX - 20XX',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dapibus lacus, nec rutrum orci. Ut interdum eleifend lectus quis convallis. Maecenas in imperdiet purus. Suspendisse posuere nulla in suscipit aliquam. Praesent semper varius urna non tempor. Integer magna ex, convallis nec rhoncus sed, placerat a felis. Fusce neque arcu, accumsan quis auctor ut, mattis vel urna. Quisque pharetra metus mauris, ac laoreet diam lacinia non.',
    },
  ];

  formations: IContent[] = [
    {
      subtitle: 'University example | Software Engineering 20XX - 20XX',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dapibus lacus, nec rutrum orci. Ut interdum eleifend lectus quis convallis. Maecenas in imperdiet purus. Suspendisse posuere nulla in suscipit aliquam. Praesent semper varius urna non tempor. Integer magna ex, convallis nec rhoncus sed, placerat a felis. Fusce neque arcu, accumsan quis auctor ut, mattis vel urna. Quisque pharetra metus mauris, ac laoreet diam lacinia non.',
    },
  ];

  summary: IContent = {
    subtitle: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dapibus lacus, nec rutrum orci. Ut interdum eleifend lectus quis convallis. Maecenas in imperdiet purus. Suspendisse posuere nulla in suscipit aliquam. Praesent semper varius urna non tempor. Integer magna ex, convallis nec rhoncus sed, placerat a felis. Fusce neque arcu, accumsan quis auctor ut, mattis vel urna. Quisque pharetra metus mauris, ac laoreet diam lacinia non.',
  };

  public candidate: Candidate = {
    name: 'calabreso',
    tel: '55999999999',
    email: 'calabreso@matchupitchu.com',
    img: '../assets/default-user.png',
  };
  skillsInfo: skillData[] = [
    {
      percentage: '85%',
      nameSkill: 'Angular',
    },
    {
      percentage: '70%',
      nameSkill: 'Node',
    },
    {
      percentage: '15%',
      nameSkill: 'PHP',
    },
    {
      percentage: '50%',
      nameSkill: 'C#',
    },
    {
      percentage: '10%',
      nameSkill: 'Delphi',
    },
  ];

  openDialog() {
    const dialogRef = this.dialog.open(CreateFormComponent, {
      disableClose: true,
      width: '35%',
      height: '45%',
    });

    dialogRef.afterClosed().subscribe((devolutivaModal: any) => {
      console.log('devolutiva', devolutivaModal);
    });
  }
}
