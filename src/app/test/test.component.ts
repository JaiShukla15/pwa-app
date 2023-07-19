import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  standalone:true
})
export class TestComponent {

  constructor(){}

  notifyMe(){
   let notificaton = new Notification('New Example',{
    body:'Hello this is some notification',
    data:{message:'Hey there'}
   });
  }
}
