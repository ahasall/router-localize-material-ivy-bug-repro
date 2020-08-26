import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { IdentityPipe } from './identity.pipe';

@NgModule({
  imports: [BrowserModule, MatButtonModule, RouterModule.forRoot([])],
  declarations: [AppComponent, IdentityPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
