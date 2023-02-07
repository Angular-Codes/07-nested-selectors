import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/group-tab/group-tab.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
