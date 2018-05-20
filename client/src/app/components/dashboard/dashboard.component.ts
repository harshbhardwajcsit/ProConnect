import { Component, OnInit } from '@angular/core';
import {FetchExperimentCategoriesService} from "../../services/fetchCategoriesService/fetch-experiment-categories.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  experimentCategories=[];
  constructor( private fetchExperimentCategoriesService:FetchExperimentCategoriesService, private router:Router) { }

  ngOnInit() {
    this.fetchExperimentCategoriesService.fetchCategories().subscribe(responseData=>{
      console.log("responseData",responseData);
      this.experimentCategories=responseData;
    },err=>{
      console.log(err);
    })

  }

}
