import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 navbar = false;
  constructor() { }

  ngOnInit() {
  }

  openVideoCallUrl(){
    if(this.navbar==false){
      this.navbar = true;
    }else{
      this.navbar = false;
    }
    console.log(this.navbar )
    
  }

}