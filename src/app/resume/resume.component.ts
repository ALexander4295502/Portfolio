import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['css/bootstrap.min.css', 'css/font-awesome.css', 'css/main.css'],
  animations: [

    //For body animation
    trigger('slideIn', [

      state('in', style({transform: 'translateX(0)'})),

      transition('void => *', [
        style({transform: 'translateX(-60px)', opacity: '0'}),
        animate('800ms ease-out')
      ])
    ]),

    // For avator animation
    trigger('popUp', [

      state('true', style({transform: 'scale(1)', opacity: '1'})),

      transition('void => *', [
        style({transform: 'scale(0.1)', opacity: '0'}),
        animate('500ms ease-out')
      ])
    ]),

  ]
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
