import {Component, HostBinding, OnInit} from '@angular/core';
import {animate, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  funfacts = Array.of<string>(
    'I have been painting since I was 5 years old, and still love it to this day',
    'I have art work as large as 32 inches by 48 inches!',
    'I took my first computer science class freshman year of high school and have loved it ever since',
    'My favorite color is white, because in art it is the color that lights up all others',
    'My favorite quote is from J. Cole, which says \"The only real revolution happens right inside of you\"'
  );
  displayedFunFacts = Array.of<string>();
  numberOfFactsToDisplay: number;
  constructor() {
    this.numberOfFactsToDisplay = 4;
  }

  ngOnInit(): void {
    this.pickFunFactsToDisplay();
  }
  pickFunFactsToDisplay(): void{
    this.displayedFunFacts = this.funfacts;
    let currentIndex = this.displayedFunFacts.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.displayedFunFacts[currentIndex];
      this.displayedFunFacts[currentIndex] = this.displayedFunFacts[randomIndex];
      this.displayedFunFacts[randomIndex] = temporaryValue;
    }
    this.displayedFunFacts = this.displayedFunFacts.slice(0, this.numberOfFactsToDisplay);
  }
}
