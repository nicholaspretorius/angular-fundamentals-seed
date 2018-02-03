// { Component } is a decorator which is essentially a function that annotates another function

import { Component } from '@angular/core';

//Register the component with Angular. This is the TS decorator to declare metadata. Component decorates the class
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ title}}

      <!--<p [innerHTML]="greeting + '!'"></p>
      {{ true ? ':)' : ':(' }}
      <img [src]="logo" [alt]="greeting"/>
      <div>
        <input 
          type="text" 
          [value]="name" 
          (input)="handleInput($event)"
          (blur)="handleBlur($event)"/>

          <p>{{ name }}</p>

        <input 
          type="text"
          [ngModel]="greeting"
          (ngModelChange)="handleChange($event)"/>

        <p>{{ greeting }}</p>

        <input 
          type="text"
          [(ngModel)]="title"/>
          
          <p>{{ title }}</p>

        <button (click)="handleClick()" [value]="name">Change</button>
      </div>

      <div>
        <button (click)="handleRefClick(username.value)">Ref Click</button>
        <input type="text" #username/>
        <p>{{ logo }}</p>
      </div>-->

      <input 
        type="text"
        [value]="username"
        (input)="handleInputChange($event.target.value)"/>

        <div *ngIf="username.length">Searching for {{ username }}</div>
    </div>
  `
}) 

// AppComponent class
export class AppComponent {
  title: string;
  greeting: string = 'Hello world';
  name: string = 'Nicholas';
  logo: string = 'img/logo.svg';
  username: string;

  constructor() {
    this.title = 'Ultimate Angular';
    this.greeting = 'Hello world';
    this.username = '';
  }

  handleInputChange(event: string) {
    this.username = event;
  }

  handleBlur(event: any){
    console.log(event);
    this.name = event.target.value;
  }

  handleInput(event: any){
    this.name = event.target.value;
  }

  handleClick() {
    this.name = "Clicked!";
  }

  handleChange(value: any) {
    this.greeting = value;
  }

  handleRefClick(value: string) {
    this.logo = value;
  }
}