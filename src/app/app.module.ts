import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameFormComponent } from './name-form/name-form.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { SecondsSelectorContainerComponent } from './seconds-selector-container/seconds-selector-container.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { PreviousRecordComponent } from './previous-record/previous-record.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    NameFormComponent,
    GameComponent,
    MainButtonComponent,
    SecondsSelectorContainerComponent,
    ControlButtonsComponent,
    PreviousRecordComponent,
    ResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
