import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{

  fillerNav = Array.of<string>( 'app-main-page','app-social', 'app-professional', 'app-hobbies-interests', 'contact-page');

  constructor() {
  }
  getDisplayName(nav: string){
    if (nav === 'app-social'){
      return 'Social';
    }
    else if (nav === 'app-professional'){
      return 'Professional';
    }
    else if (nav === 'app-hobbies-interests'){
      return 'Hobbies/Interests';
    }
    else if (nav === 'contact-page'){
      return 'Contact';
    }
    else if (nav === 'app-main-page'){
      return 'Home';
    }
    return '';
  }
  ngOnInit(): void {
  }
}
