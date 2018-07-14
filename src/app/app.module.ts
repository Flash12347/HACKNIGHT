import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';
import { Game4Component } from './game4/game4.component';
import { Game5Component } from './game5/game5.component';
import { TipsComponent } from './tips/tips.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { Advisors1Component } from './advisors1/advisors1.component';
import { Advisors2Component } from './advisors2/advisors2.component';
import { Advisors3Component } from './advisors3/advisors3.component';
import { Advisors4Component } from './advisors4/advisors4.component';
import { Advisors5Component } from './advisors5/advisors5.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    Game4Component,
    Game5Component,
    TipsComponent,
    AdvisorsComponent,
    Advisors1Component,
    Advisors2Component,
    Advisors3Component,
    Advisors4Component,
    Advisors5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
