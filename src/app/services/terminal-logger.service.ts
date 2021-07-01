import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

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
    this._log$.next([...this._log$.value, command]);
  }
}
