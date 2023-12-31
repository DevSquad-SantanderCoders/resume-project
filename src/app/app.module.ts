import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContentsComponent } from './components/contents/contents.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { DevsDialogComponent } from './components/devs-dialog/devs-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfosComponent } from './components/infos/infos.component';
import { SkillComponentComponent } from './components/skill-component/skill-component.component';
import { ImageEffects } from './directives/imageEffects/imageEffects.directive';
import { TelefonePipe } from './pipes/tel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfosComponent,
    SkillComponentComponent,
    ContentsComponent,
    CreateFormComponent,
    TelefonePipe,
    ImageEffects,
    FooterComponent,
    DevsDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
