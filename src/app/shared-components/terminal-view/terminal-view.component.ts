import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {TerminalLoggerService} from "../../services/terminal-logger.service";

@Component({
  selector: 'app-terminal-view',
  templateUrl: './terminal-view.component.html',
  styleUrls: ['./terminal-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalViewComponent {
  log: Observable<string[]>;

  constructor(private terminalLoggerService: TerminalLoggerService) {
    this.log = terminalLoggerService.log;
  }
}
