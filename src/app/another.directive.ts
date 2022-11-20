import { BgColorDirective } from './bg-color.directive';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
  standalone: true,
  hostDirectives: [
    {
      directive: BgColorDirective,
      inputs: ['bgColor']
    }
]
})
export class AnotherDirective {
}
