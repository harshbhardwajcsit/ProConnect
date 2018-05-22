import { Component, OnInit } from '@angular/core';
import {FetchExperimentsWithTagService} from "../../services/fetchExperimentsWithTag/fetch-experiments-with-tag.service";
import {parseHttpResponse} from "selenium-webdriver/http";

@Component({
  selector: 'app-experiments-name',
  templateUrl: './experiments-name.component.html',
  styleUrls: ['./experiments-name.component.css']
})
export class ExperimentsNameComponent implements OnInit {
  currentExperimentTag='';
  constructor(private fetchExperimentsWithTagService:FetchExperimentsWithTagService) { }

  ngOnInit() {
    this.currentExperimentTag=this.fetchExperimentsWithTagService.currentExperimentTag;
    console.log(this.currentExperimentTag);
    this.fetchExperimentsWithTagService.getExperimentsWithTag().subscribe(responseData=>{
      console.log("projects with tag",responseData);
    },err=>{
      console.log(err);
    })
  }

}
