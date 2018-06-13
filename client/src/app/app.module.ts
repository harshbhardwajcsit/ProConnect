import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import {AppMaterialModule} from "./app.material.module";
import {FetchExperimentCategoriesService} from "./services/fetchCategoriesService/fetch-experiment-categories.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ExperimentsNameComponent} from "./components/experiments-name/experiments-name.component";
import {FetchExperimentsWithTagService} from "./services/fetchExperimentsWithTag/fetch-experiments-with-tag.service";
import {AddNewAccountForUserComponent} from "./components/add-new-account-for-user/add-new-account-for-user.component";
import {LoginUserComponent} from "./components/login-user/login-user.component";
import {AddExpComponent} from "./components/experiments/add-exp/add-exp.component";
import {EditExpComponent} from "./components/experiments/edit-exp/edit-exp.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ExperimentsNameComponent,
    AddNewAccountForUserComponent,
    LoginUserComponent,
    AddExpComponent,
    EditExpComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
      ,{
        path:'create-account',
        component:ExperimentsNameComponent
      }
      ,{
        path:'login',
        component:LoginUserComponent
      },
      {
        path:'add-experiment',
        component:AddExpComponent
      }
    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [FetchExperimentCategoriesService,FetchExperimentsWithTagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
