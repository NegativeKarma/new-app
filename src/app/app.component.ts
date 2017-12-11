import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  video = {
    title: 'Take Five',
    views: 2,
    liked: true
  }

  handleClick(){
    console.log('You clicked the button!')
  }
}
