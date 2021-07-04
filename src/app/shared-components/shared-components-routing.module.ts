import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TerminalWindowComponent} from "./terminal-window/terminal-window.component";
import {GameViewComponent} from "./game-view/game-view.component";

const routes: Routes = [
  {path: 'rouge', component: GameViewComponent},
  {path: '', component: TerminalWindowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedComponentsRoutingModule {
}
