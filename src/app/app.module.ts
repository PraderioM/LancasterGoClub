import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { RulesComponent } from './rules/rules.component';
import { MeetingDetailsComponent } from './home/meeting-details/meeting-details.component';
import { JosekleComponent } from './josekle/josekle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResourcesComponent,
    RulesComponent,
    MeetingDetailsComponent,
    JosekleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
