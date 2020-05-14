import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from './Services/httpservice.service';
import { takeUntil } from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import { Title } from '@angular/platform-browser';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ThemeService} from './Services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,OnDestroy {
  isDarkTheme: Observable<boolean>;

  constructor(private appService: HttpService, public titleService: Title, overlayContainer: OverlayContainer,
              private themeService: ThemeService) {
    overlayContainer.getContainerElement().classList.add('app-theme');
    this.setTitle();
  }
  title = 'Alexandra\'s Site';
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.nullValidator && Validators.required),
    lastName: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required)
  });

  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();
  onSubmit() {
    this.appService.addUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.userCount = this.userCount + 1;
      console.log(this.userCount);
      this.userForm.reset();
    });
  }

  getAllUsers() {
    this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
      this.users = users;
    });
  }
  public setTitle() {
    this.titleService.setTitle( this.title );
  }
  ngOnInit(){
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
