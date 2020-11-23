import { Component, OnInit } from '@angular/core';
import { Path } from 'three';
import { WriteService } from '../service/write.service';
import { SpecsComponent } from '../specs/specs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  initState = false;
  hamburger;
  navLinks;
  links;

  email: string;
  phone: number;
  workingStatus: string;

  constructor(public writeservice: WriteService) { }

  addRecord() {
    let User = {};
    User['E-mail'] = this.email;
    User['Phone'] = this.phone;
    User['Working Status'] = this.workingStatus;
    this.writeservice.writeUserData(User).then(res => {
      
    })
  }

  ngOnInit(): void {
    this.hamburger = document.querySelector('.hamburger');
    this.navLinks = document.querySelector('.nav-links');
    this.links = document.querySelectorAll('.nav-links li');
    console.log(this.navLinks, this.hamburger, this.links);
  }

  onBtnToggle = () => {
    this.navLinks.classList.toggle('open');
  };

}
