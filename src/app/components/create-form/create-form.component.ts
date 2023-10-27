import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent {
  sucess = false;
  formContact!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder) {
    this.buildFormContact();
  }
  buildFormContact() {
    this.formContact = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      subject: [null, [Validators.required, Validators.minLength(20)]],
    });
  }

  setMessage() {
    this.sucess = true;
  }
}
