import { Directive, HostListener, HostBinding } from '@angular/core';
import { concat } from 'ramda';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class') classes: string;
  @HostListener('click') click() {
    this.classes = this.classes + ' open';
  }
}
