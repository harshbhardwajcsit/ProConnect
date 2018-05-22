import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import {AppMaterialModule} from "./app.material.module";
import {FetchExperimentCategoriesService} from "./services/fetchCategoriesService/fetch-experiment-categories.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ExperimentsNameComponent} from "./components/experiments-name/experiments-name.component";
import {FetchExperimentsWithTagService} from "./services/fetchExperimentsWithTag/fetch-experiments-with-tag.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ExperimentsNameComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:DashboardComponent
      }
      ,{
        path:'dashboard',
        component:DashboardComponent
      }
      ,{
        path:'experiments',
        component:ExperimentsNameComponent
      }
    ])
  ],

  providers: [FetchExperimentCategoriesService,FetchExperimentsWithTagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
