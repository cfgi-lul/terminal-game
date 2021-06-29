import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TerminalWindowComponent} from "./terminal-window/terminal-window.component";

const routes: Routes = [
  // {path: '', component: TerminalWindowComponent},
  {path: 'tasks/choose-word', component: TerminalWindowComponent},
  {path: 'tasks', component: TerminalWindowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedComponentsRoutingModule {
}
