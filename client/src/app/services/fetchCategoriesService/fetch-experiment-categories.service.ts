import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/index";

@Injectable()
export class FetchExperimentCategoriesService {

  constructor(private http: HttpClient,private router:Router) { }
  fetchCategories():Observable<any>{
    return this.http.get<any>('api/dashboard/category');
  }
}
