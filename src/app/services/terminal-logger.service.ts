import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TerminalLoggerService {
  private _log$: BehaviorSubject<Array<string>> = new BehaviorSubject(Array<string>());

  constructor(private router: Router) {
  }

  get log(): Observable<Array<string>> {
    return this._log$;
  }

  logCommand(command: string): void {
    command = command.trim();
    let userToShow: string = 'MacBookAir:-/user$'
    let terminalReplay: string = '';
    if (command === 'ls') {
      terminalReplay = '.. rouge'
      this._log$.next([...this._log$.value, `${userToShow}\xa0${command}`, `${terminalReplay}`]);
    } else if (command.startsWith('cd ') || command === 'cd') {
      let navigateTo = command.split(' ')[1];
      switch (navigateTo) {
        case 'rouge':
          this.router.navigate(['rouge']).catch(err => console.error(err));
          break;
        case '..':
          this.router.navigate(['']).catch(err => console.error(err));
          break;
        case '':
          this.router.navigate(['']).catch(err => console.error(err));
          break;
        default:
          userToShow = '‑bash:';
          terminalReplay = 'No such file or directory';
          break;
      }
      this._log$.next([...this._log$.value, `${userToShow}\xa0${command} ${terminalReplay}`]);
    } else if (command === 'clear') {
      this._log$.next([]);
    } else {
      terminalReplay = 'command not found';
      this._log$.next([...this._log$.value, `${userToShow}\xa0${command}`, `‑bash:\xa0${command}: ${terminalReplay}`]);
    }
  }
}
