import { Directive, AfterViewInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';

// declare var $ : any;

@Directive({
  selector: '[appDatepicker]'
})

export class DatepickerDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    $(this.el.nativeElement);
  }

}

