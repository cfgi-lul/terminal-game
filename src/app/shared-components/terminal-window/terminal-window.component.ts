import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {TerminalLoggerService} from "../../services/terminal-logger.service";
import {BehaviorSubject, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Event} from "@angular/router";

@Component({
  selector: 'app-terminal-window',
  templateUrl: './terminal-window.component.html',
  styleUrls: ['./terminal-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalWindowComponent implements AfterViewInit, OnDestroy {
  private componentDestroyed$: Subject<never> = new Subject();
  focusOnInputEvent$: Subject<MouseEvent> = new Subject();

  constructor(private logger: TerminalLoggerService) {
  }

  ngAfterViewInit(): void {
    this.logger.log
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(e => {
        document.getElementById('terminalScrollableBody')?.scrollBy(0, 1_000_000);
      })
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  focusOnInput(event: MouseEvent):void {
    this.focusOnInputEvent$.next(event);
  }
}
