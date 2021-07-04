import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  helpShownBefore: boolean;
  title = 'terminal-game';

  constructor() {
    this.helpShownBefore = JSON.parse(localStorage.getItem('help') as string);
    localStorage.setItem('help', 'true');
  }

  closeHelp() {
    this.helpShownBefore = true;
    console.log(this.helpShownBefore);
  }
}
