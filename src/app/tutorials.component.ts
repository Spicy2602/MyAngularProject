import {Component} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`<h4> Heading for tutorial component</h4>
    <h2 [class.myClass]="applyClass">This is class binding</h2>
    <h2 [style.color]="applyStyle?'maroon':'purple'">This is style binding</h2><br>
    <!--<input type="text" #inputType>-->
    <!--<button (mouseover)="onClick(inputType.value)">Submit</button>-->
    <input type="text" [(ngModel)]="firstName">
    <input type="text" [(ngModel)]="lastName">
    Full Name:<input type="text" value="{{firstName}}"><input type="text" value="{{lastName}}">
    <!--Full Name:{{firstName}} {{lastName}}-->
    <p *ngIf="showElement">This is ngIf directive</p>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'lime'">This is lime color</p>
        <p *ngSwitchCase="'red'">This is red color</p>
        <p *ngSwitchDefault>Invalid color</p>        
    </div>
    
    `,
    styles:[`.myClass{
    color:green;
  }`,`h4{
    color:red;
  }`]
})
export class TutorialsComponent{
    public applyClass=false;
    public applyStyle=false;
    public showElement=true;
    public color="green";
    public firstName;
    public lastName;
    /*onClick(value){
        console.log(value);
    }*/
}