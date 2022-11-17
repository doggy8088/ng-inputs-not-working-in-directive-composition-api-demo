import { AnotherDirective } from '../another.directive.ts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss'],
  hostDirectives: [
    {
      directive: AnotherDirective,
      inputs: ['bgColor']
    }
  ]
})
export class MyCompComponent { }
