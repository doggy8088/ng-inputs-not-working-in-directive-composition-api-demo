import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appBgColor]'
})
export class BgColorDirective {
  @HostBinding('style.display') display = 'inline-block';
  @Input() @HostBinding('style.background-color') bgColor = 'yellow';
}
