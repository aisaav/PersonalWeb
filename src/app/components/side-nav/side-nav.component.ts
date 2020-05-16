import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{

  fillerNav = Array.of<string>('app-about', 'app-social', 'app-professional', 'app-hobbies-interests', 'app-contact');

  constructor() {
  }
  getDisplayName(nav: string){
    if (nav === 'app-about'){
      return 'About';
    }
    else if (nav === 'app-social'){
      return 'Social';
    }
    else if (nav === 'app-professional'){
      return 'Professional';
    }
    else if (nav === 'app-hobbies-interests'){
      return 'Hobbies/Interests';
    }
    else if (nav === 'app-contact'){
      return 'Contact';
    }
    return '';
  }
  ngOnInit(): void {
  }
}
