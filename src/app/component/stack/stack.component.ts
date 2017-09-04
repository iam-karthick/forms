import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-stack',
  templateUrl: `./stack.component.html`
})
export class StackComponent  { 
  sub:boolean=false;
  user:{ name:string, location:string, type:string }={ name:'jack', location:'chennai',type:'value'};
 onClick(form:NgForm){
  this.sub=true;
 }
 onUser(form:NgForm)
 {
   this.user={name:'', location:'', type:''};
 }
 onEdit(form:NgForm){
  this.sub=false;
 }
}
