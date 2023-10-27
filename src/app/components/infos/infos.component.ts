import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidate } from '../../models/candidate-data.model';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss'],
})
export class InfosComponent {
  @Input() public candidate!: Candidate;
  @Output() public nameCandidate = new EventEmitter<any>();

  constructor() {
    const recentImage = sessionStorage.getItem('image');
    if (recentImage) {
      setTimeout(() => {
        document
          .getElementById('user-image-id')
          ?.setAttribute('src', recentImage);
      }, 1000);
    }
  }

  loadPhoto(event: any): void {
    const reader = new FileReader();

    reader.addEventListener('load', (): void => {
      sessionStorage.setItem('image', `${reader.result}`);
      document
        .getElementById('user-image-id')
        ?.setAttribute('src', `${reader.result}`);
    });

    reader.readAsDataURL(event.target.files[0]);
  }
}
