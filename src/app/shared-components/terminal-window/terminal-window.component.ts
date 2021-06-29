import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-terminal-window',
  templateUrl: './terminal-window.component.html',
  styleUrls: ['./terminal-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalWindowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
