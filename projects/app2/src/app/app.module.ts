import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';

const providers:any = [];

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class App2Module { }

@NgModule({})
export class App2SharedModule {
  static forRoot(): ModuleWithProviders<App2Module> {
    return {
      ngModule: App2Module,
      providers: providers
    };
  }
}
