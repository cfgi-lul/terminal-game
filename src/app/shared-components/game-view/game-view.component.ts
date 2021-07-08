import { Component, OnInit } from '@angular/core';
import {mapGenerator} from '../../scripts/mapGenerator'


@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  constructor() {
    mapGenerator(2);
  }

  ngOnInit(): void {
  }

}
