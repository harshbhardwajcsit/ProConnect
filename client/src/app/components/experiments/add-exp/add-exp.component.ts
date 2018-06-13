import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FetchExperimentCategoriesService} from "../../../services/fetchCategoriesService/fetch-experiment-categories.service";

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent implements OnInit {

  constructor(private fetchExperimentCategoriesService:FetchExperimentCategoriesService) { }
  experimentCategories=[];
  ngOnInit() {
    this.fetchExperimentCategoriesService.fetchCategories().subscribe(responseData=>{
      this.experimentCategories=responseData;
      console.log(this.experimentCategories);
    })
  }

}
