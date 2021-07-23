import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit{
  tooltipElement = document.createElement('div');
  visible = false;

  @Input()
  set tooltip(value: string) {
    this.tooltipElement.textContent = value;
  }

  show() {
    this.tooltipElement.classList.add('tooltip--custom-directive-active');
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip--custom-directive-active');
  }

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.tooltipElement.className = 'tooltip--custom-directive';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }
}
