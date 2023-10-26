import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent {
  @Input() public title!: any  
  @Input() public subtitle!: any
  @Input() public text!: any
}
