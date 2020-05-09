import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from '@angular/core';
import {
  append,
  applyTo,
  concat,
  equals,
  ifElse,
  includes,
  reject,
} from 'ramda';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
