import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { InfosComponent } from './components/infos/infos.component';
import { SkillComponentComponent } from './components/skill-component/skill-component.component';

@NgModule({
  declarations: [AppComponent, InfosComponent, SkillComponentComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
