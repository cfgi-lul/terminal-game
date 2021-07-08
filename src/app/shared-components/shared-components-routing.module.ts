import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameViewComponent} from "./game-view/game-view.component";
import {TerminalViewComponent} from "./terminal-view/terminal-view.component";

const routes: Routes = [
  {path: 'rouge', component: GameViewComponent},
  {path: '', component: TerminalViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedComponentsRoutingModule {
}
