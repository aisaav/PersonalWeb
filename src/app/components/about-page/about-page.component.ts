import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  funfacts = Array.of<string>(
    'I am allergic to whey protein which means I can\'t have dairy products!',
    'I have had over 10 casts in my lifetime, talk about a lot of broken bones!',
    'I have been painting since I was 5 years old, and still love it to this day',
    'My favorite disney princess is Belle from Beauty and the Beast, named my dog after her!',
    'I share a birthday with Quentin Tarantino, Manuel Neuer, Mariah Carey, Fergie and Brenda Song!',
    'I have been to 10+ concerts!',
    'I have art work as large as 32 inches by 48 inches!',
    'I took my first computer science class freshman year of high school and have loved it ever since',
    'I am terrified of zombies',
    'I went to the Star Wars national convention in Chicago in 2019',
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
