import * as Raven from 'raven-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

Raven
  .config('https://6dd6b79934654822b631951be27ec0e1@sentry.io/1190123', {
    release: "0df4204d5fb22a5774a5ae89c3c608393ad17b0d"
  })
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    Raven.captureException(err.originalError || err);
  }
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ { provide: ErrorHandler, useClass: RavenErrorHandler } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
