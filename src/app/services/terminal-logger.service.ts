import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TerminalLoggerService {
  private log: string[] = [];


  constructor() {
  }
}
