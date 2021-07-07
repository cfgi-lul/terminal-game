import {ChangeDetectionStrategy, Component, HostListener} from '@angular/core';

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

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.code === "Slash") {
      this.helpShownBefore = !this.helpShownBefore;
    }
  }

  closeHelp() {
    this.helpShownBefore = true;
    console.log(this.helpShownBefore);
  }
}
