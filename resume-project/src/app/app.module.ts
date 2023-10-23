import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsBarComponent } from './components/skills-bar/skills-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
