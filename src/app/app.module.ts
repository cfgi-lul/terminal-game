import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {SharedComponentsModule} from "./shared-components/shared-components.module";
import { AutoFocusDirective } from './Directives/auto-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    AutoFocusDirective,
  ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        SharedComponentsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
