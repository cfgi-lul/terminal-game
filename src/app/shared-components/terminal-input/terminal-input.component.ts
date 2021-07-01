import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {TerminalLoggerService} from "../../services/terminal-logger.service";

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalInputComponent {
  inputValue: FormControl;

  constructor(private fb: FormBuilder,
              private terminalLoggerService: TerminalLoggerService) {
    this.inputValue = this.fb.control('');
    this.inputValue.valueChanges.subscribe(e => {
      this.terminalLoggerService.logCommand(e);
    })
  }
}
