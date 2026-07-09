import {Directive, ElementRef, Input, OnInit, Renderer2,} from '@angular/core';

@Directive({
  selector: '[appMaskNumber]'
})
export class MaskNumberDirective  implements OnInit {
  @Input('appMaskNumber') phone:string| null = null ;

  constructor(private  el:ElementRef,
              private renderer: Renderer2,) { }
ngOnInit(): void {
    if  (this.phone){
      const masked = this.markPhone(this.phone);
      this.renderer.setProperty(this.el.nativeElement, 'value', masked);
    }
}
private  markPhone(phone:string):string{
    if (!phone) return ''; {
      const visible = 4
    const maskedLength = phone.length - visible;
    return '*'.repeat(maskedLength > 0 ? maskedLength : 0) + phone.slice(-visible);
  }

}
}
