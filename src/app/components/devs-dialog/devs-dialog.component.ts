import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-devs-dialog',
  templateUrl: './devs-dialog.component.html',
  styleUrls: ['./devs-dialog.component.scss']
})
export class DevsDialogComponent {
  @Input() public devsData!: any 
  @Output() public ChangeRenderCondition = new EventEmitter<any>();
  
  renderConditionFalse:boolean = false

  sendConditionFalse(){
    this.ChangeRenderCondition.emit(this.renderConditionFalse)
  }
}
