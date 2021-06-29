import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-terminal-view',
  templateUrl: './terminal-view.component.html',
  styleUrls: ['./terminal-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
