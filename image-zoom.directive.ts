import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageZoom]'
})
export class ImageZoomDirective {

  constructor() { }
  
  

  @HostBinding('style.transform')
  imgWidth  : string
  
  @HostListener('mouseenter')
  mouseIn(){
    //console.log('In')
    this.imgWidth = 'scale(2.5)'
  }
  @HostListener('mouseleave')
  mouseOut(){
    //console.log('Out')
    this.imgWidth = 'scale(1)'
  }

}
