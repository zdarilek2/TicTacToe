import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameFieldComponent } from './game-field/game-field.component';
import { HelpModalComponent } from './help-modal/help-modal.component';
import { DetectWinnerComponent } from './detect-winner/detect-winner.component';
import { DataService } from './data.service';

//import {PopupModule} from 'ng2-opd-popup';

@NgModule({
  declarations: [
    AppComponent,
    GameFieldComponent,
    HelpModalComponent,
    DetectWinnerComponent
  ],
  imports: [
    BrowserModule
   // DetectWinnerComponent   //?
    //PopupModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
