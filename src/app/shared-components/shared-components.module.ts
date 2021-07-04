import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SharedComponentsRoutingModule} from './shared-components-routing.module';
import {TerminalInputComponent} from './terminal-input/terminal-input.component';
import {TerminalViewComponent} from './terminal-view/terminal-view.component';
import {TerminalWindowComponent} from './terminal-window/terminal-window.component';
import { GameViewComponent } from './game-view/game-view.component';


@NgModule({
  declarations: [
    TerminalWindowComponent,
    TerminalInputComponent,
    TerminalViewComponent,
    GameViewComponent
  ],
  exports: [
    TerminalWindowComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedComponentsModule {
}
