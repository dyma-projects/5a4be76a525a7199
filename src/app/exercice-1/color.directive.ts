import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostListener('window:keyup', ['$event']) private colorise(
    event: KeyboardEvent
  ) {
    switch (event.key) {
      case 'ArrowRight':
        this.el.nativeElement.style.color = 'red';
        break;
      case 'ArrowLeft':
        this.el.nativeElement.style.color = 'green';
        break;
      case 'ArrowUp':
        this.el.nativeElement.style.color = 'blue';
        break;
      case 'ArrowDown':
        this.el.nativeElement.style.color = 'yellow';
        break;
    }
  }

  constructor(private el: ElementRef) {}
}
