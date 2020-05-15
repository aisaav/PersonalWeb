import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from './Services/httpservice.service';
import { takeUntil } from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import { Title } from '@angular/platform-browser';
import {OverlayContainer} from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  constructor(private appService: HttpService, public titleService: Title, private overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('default-theme');
    this.setTitle();

  }
  @HostBinding('class') componentCssClass;

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

  themeChange(): void{
    if (this.overlayContainer.getContainerElement().classList.contains('default-theme')) {
      this.overlayContainer.getContainerElement().classList.remove('default-theme');
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.componentCssClass = 'dark-theme';
    } else if (this.overlayContainer.getContainerElement().classList.contains('dark-theme')) {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      this.overlayContainer.getContainerElement().classList.add('default-theme');
      this.componentCssClass = 'default-theme';
    } else {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.componentCssClass = 'dark-theme';
    }
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
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
