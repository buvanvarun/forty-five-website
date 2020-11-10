import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
