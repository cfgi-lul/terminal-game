import {ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {TerminalLoggerService} from "../../services/terminal-logger.service";
import {Subject} from "rxjs";
import {delay, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalInputComponent implements OnInit, OnDestroy {
  inputValue: FormControl;
  @Input() focus: Subject<MouseEvent> | undefined;
  @ViewChild('input') input?: ElementRef;
  private componentDestroyed$: Subject<never> = new Subject();

  constructor(private fb: FormBuilder,
              private logger: TerminalLoggerService) {
    this.inputValue = this.fb.control('');
  }

  submitCommand(): void {
    this.logger.logCommand(this.inputValue.value);
    this.inputValue.setValue('');
  }

  ngOnInit(): void {
    this.focus?.pipe(takeUntil(this.componentDestroyed$), delay(200))
      .subscribe(e => this.input?.nativeElement.focus());
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
