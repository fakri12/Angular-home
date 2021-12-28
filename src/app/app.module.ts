import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpNavBarComponent } from './component/up-nav-bar/up-nav-bar.component';
import { DownNavBarComponent } from './component/down-nav-bar/down-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UpNavBarComponent,
    DownNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
