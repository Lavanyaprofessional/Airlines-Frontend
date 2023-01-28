import { Component, OnInit } from '@angular/core';
//import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{
  items = [1, 2, 3, 4];
  constructor(){

  }
  ngOnInit(): void {
    
  }
  
  
}
