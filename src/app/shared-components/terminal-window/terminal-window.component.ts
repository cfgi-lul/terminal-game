import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-terminal-window',
  templateUrl: './terminal-window.component.html',
  styleUrls: ['./terminal-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalWindowComponent {
  @ViewChild('terminalScrollableBody', {read: ElementRef, static: true}) terminalScrollableBody: any;

  constructor() {
  }
}
