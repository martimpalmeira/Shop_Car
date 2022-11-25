import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      setTimeout(this.handleDot2Click, 2000)
      setTimeout(this.handleDot3Click, 4000)
      setTimeout(this.handleDot1Click, 6000)
   
 
   
  }

  handleDot1Click(){
    const firstBanner = document.querySelector<HTMLElement>('.slider-banner-buyCar');
    const dot1 = document.querySelector<HTMLElement>('.dot1');
    const dot2 = document.querySelector<HTMLElement>('.dot2');
    const dot3 = document.querySelector<HTMLElement>('.dot3');

    firstBanner!.style.marginLeft = "0%";
    dot1!.style.backgroundColor = "white";
    dot2!.style.backgroundColor = "silver";
    dot3!.style.backgroundColor = "silver";
  }

  handleDot2Click(){
    const firstBanner = document.querySelector<HTMLElement>('.slider-banner-buyCar');
    const dot1 = document.querySelector<HTMLElement>('.dot1');
    const dot2 = document.querySelector<HTMLElement>('.dot2');
    const dot3 = document.querySelector<HTMLElement>('.dot3');

    firstBanner!.style.marginLeft = "-100vw";
    dot1!.style.backgroundColor = "silver";
    dot2!.style.backgroundColor = "white";
    dot3!.style.backgroundColor = "silver";
  }


  handleDot3Click(){
    const firstBanner = document.querySelector<HTMLElement>('.slider-banner-buyCar');
    const dot1 = document.querySelector<HTMLElement>('.dot1');
    const dot2 = document.querySelector<HTMLElement>('.dot2');
    const dot3 = document.querySelector<HTMLElement>('.dot3');

    firstBanner!.style.marginLeft = "-200vw";
    dot1!.style.backgroundColor = "silver";
    dot2!.style.backgroundColor = "silver";
    dot3!.style.backgroundColor = "white";
  }


 

  


  



  


}