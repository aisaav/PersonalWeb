import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{

  fillerNav = Array.of<string>( 'home-page', 'extracurricular-page', 'professional-page', 'hobbies-interests-page', 'contact-page');

  constructor() {
  }
  getDisplayName(nav: string){
    if (nav === 'extracurricular-page'){
      return 'Extracurricular';
    }
    else if (nav === 'professional-page'){
      return 'Professional';
    }
    else if (nav === 'hobbies-interests-page'){
      return 'Hobbies/Interests';
    }
    else if (nav === 'contact-page'){
      return 'Contact';
    }
    else if (nav === 'home-page'){
      return 'Home';
    }
    return '';
  }
  ngOnInit(): void {
  }
}
