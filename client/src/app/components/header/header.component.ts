import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatToolbarModule} from "@angular/material";
import {LoginServiceService} from "../../services/loginService/login-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title="Propeller";
  constructor(private router:Router,private loginService: LoginServiceService){}

  ngOnInit() {
  }
  goHome(){
    this.router.navigateByUrl('/');
  }
  userSignIn(){
    this.loginService.userLogin().subscribe(responseData=>{
      console.log(responseData);
    },err=>{
      console.log(err);
    },()=>{
      console.log("subscribe");
    })
  }

  addNewExperiment(){
    this.router.navigate(['/','add-experiment']);
  }


}
