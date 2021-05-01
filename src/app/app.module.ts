import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Amplify, {Interactions } from 'aws-amplify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:c10c1e33-b691-4533-a00f-88bc58cd7416',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      "autobot_dev": {
        "name": "autobot_dev",
        "alias": "$LATEST",
        "region": "us-east-1",
      },
    }
  }
});
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }