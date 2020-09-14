import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBook]'
})
export class BookDirective {

  constructor() { }

  @HostListener("click", ["$event"])
  public onClick(event: any): void
  {
    
      event.stopPropagation();
  }

}
