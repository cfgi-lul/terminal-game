import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { TerminalWindowComponent } from './terminal-window/terminal-window.component';


@NgModule({
    declarations: [
        TerminalWindowComponent
    ],
    exports: [
        TerminalWindowComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsRoutingModule
    ]
})
export class SharedComponentsModule { }
