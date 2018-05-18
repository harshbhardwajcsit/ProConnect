import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import {AppMaterialModule} from "./app.material.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    RouterModule.forRoot([
      {
        path:'',
        component:DashboardComponent
      }
      ,{
        path:'dashboard',
        component:DashboardComponent
      }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
