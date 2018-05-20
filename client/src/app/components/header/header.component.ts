import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatToolbarModule} from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title="ProConnect";
  constructor(private router:Router){}

  ngOnInit() {


  }
  goHome(){
    this.router.navigateByUrl('/');
  }


}
