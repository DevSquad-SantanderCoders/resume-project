import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfosComponent } from './components/infos/infos.component';
import { SkillComponentComponent } from './components/skill-component/skill-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContentsComponent } from './component/contents/contents.component';

@NgModule({
  declarations: [AppComponent, InfosComponent, SkillComponentComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ContentsComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
