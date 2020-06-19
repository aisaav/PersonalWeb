import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{

  fillerNav = Array.of<string>( 'home-page', 'extracurricular-page', 'hobbies-page', 'professional-page', 'interests-page',
     'research-page', 'contact-page');

  constructor() {
  }
  getDisplayName(nav: string){
    if (nav === 'extracurricular-page'){
      return 'Education & Student Organizations';
    }
    else if (nav === 'professional-page'){
      return 'Industry & Technical Experience';
    }
    else if (nav === 'interests-page'){
      return 'Interests';
    }
    else if (nav === 'hobbies-page'){
      return 'Hobbies';
    }
    else if (nav === 'contact-page'){
      return 'Contact';
    }
    else if (nav === 'research-page'){
      return 'Research Experience';
    }
    else if (nav === 'home-page'){
      return 'Home';
    }
    return '';
  }
  ngOnInit(): void {
  }
}
