import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUserDirective]'
})
export class UserDirectiveDirective {

  constructor(public el: ElementRef) {
    el.nativeElement.style.color = 'green'
    el.nativeElement.style.background = 'lightblue'
    el.nativeElement.style.padding = '15px'
  }

}
