import {ChangeDetectionStrategy, Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TerminalInputComponent implements OnInit {
  inputValue: FormControl;
  constructor(private fb: FormBuilder, private elRef: ElementRef) {
    this.inputValue = this.fb.control('');
  }

  ngOnInit(): void {
  }

}
