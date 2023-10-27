import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfosComponent } from './components/infos/infos.component';
import { SkillComponentComponent } from './components/skill-component/skill-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContentsComponent } from './components/contents/contents.component';
import { ImageEffects } from './directives/imageEffects/imageEffects.directive';


@NgModule({
  declarations: [AppComponent, InfosComponent, SkillComponentComponent, ContentsComponent, ImageEffects],
  imports: [BrowserModule, BrowserAnimationsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
