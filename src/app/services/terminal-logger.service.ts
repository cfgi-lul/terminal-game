import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CommandType} from "../enums/command-type";

@Injectable({
  providedIn: 'root'
})
export class TerminalLoggerService {
  private _log$: BehaviorSubject<Array<string>> = new BehaviorSubject(Array<string>());

  constructor() {
  }

  get log(): Observable<Array<string>> {
    return this._log$;
  }

  logCommand(command: string): void {
    let userToShow: string = 'MacBook-Air: /user$'
    let terminalReplay: string = '';
    if (command === 'ls') {
      terminalReplay = CommandType.ls
    } else {
      userToShow = '-bash:';
      terminalReplay = CommandType.noCommand;
      // this._log$.next([...this._log$.value, command, `-bash: ${command}: ${terminalReplay}`]);
    }

    this._log$.next([...this._log$.value, `${command}`, `${userToShow} ${command}: ${terminalReplay}`]);
  }
}
