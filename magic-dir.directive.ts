import { Directive, HostBinding, OnInit, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appMagicDir]'
})
export class MagicDirDirective {
  @HostBinding('style.width.px')
  txtwdth : number
  
  constructor() { }
  ngOnInit(){
    //console.log('10')
    this.txtwdth = 80
  }
  
  @HostListener('mouseenter')
  mouseIn(){
    //console.log('In')
    this.txtwdth =160
  }
  @HostListener('mouseleave')
  mouseOut(){
    //console.log('Out')
    this.txtwdth =80
  }

}

