import { Directive,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagicBox]'
})
export class MagicBoxDirective {

  @HostBinding('style.background')
  backColr : string
  constructor() { }

  changeColour(){
    this.backColr = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random()*256)})`
  }
  @HostListener('mouseenter')
  mounseIn(){
    this.changeColour()
  }
  @HostListener('mouseleave')
  mouseOut(){
    this.changeColour()
  }

}
