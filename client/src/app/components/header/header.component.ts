import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatToolbarModule} from "@angular/material";
import {LoginServiceService} from "../../services/loginService/login-service.service";
import {FetchExperimentCategoriesService} from "../../services/fetchCategoriesService/fetch-experiment-categories.service";
import {parseHttpResponse} from "selenium-webdriver/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title="Propeller";
  constructor(private router:Router,private loginService: LoginServiceService,private fetchExperimentCategoriesService:FetchExperimentCategoriesService){}
  experimentCategories=[];
  ngOnInit() {
    this.fetchExperimentCategoriesService.fetchCategories().subscribe(responseData=>{
      this.experimentCategories=responseData;
    },err=>{
      console.log(err);
    });
  }
  goHome(){
    this.router.navigateByUrl('/');
  }
  userSignIn(){
    this.loginService.userLogin().subscribe(response=>{
      console.log(response);

    },err=>{
      console.log(err);
    });
  }

  addNewExperiment(){
    this.router.navigate(['/','add-experiment']);
  }


}
