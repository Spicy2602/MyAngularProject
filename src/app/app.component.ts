import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h4>Heading 4 for App Component</h4>
  <h5>{{title}}</h5>
  <img [src]="imgSrc">
  <my-tutorial></my-tutorial>`,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles:[`h4{
  color:blue
  }`]
  })
export class AppComponent {
  public title = 'Welcome to Angular 2 beginners guide';
  public imgSrc="http://lorempixel.com/400/200";  
}
