import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class FetchExperimentsWithTagService {
  currentExperimentTag='';
  constructor(private http: HttpClient,private router:Router ) { }
  getExperimentsWithTag() : Observable<any>{
    return this.http.get("api/projects/"+this.currentExperimentTag);
  }
}
