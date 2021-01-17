import { Component, OnInit } from '@angular/core';
import { Path } from 'three';
import { SpecsComponent } from '../specs/specs.component';

@Component({
  selector: 'app-initial-screen',
  templateUrl: './initial-screen.component.html',
  styleUrls: ['./initial-screen.component.css']
})
export class InitialScreenComponent implements OnInit {

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
