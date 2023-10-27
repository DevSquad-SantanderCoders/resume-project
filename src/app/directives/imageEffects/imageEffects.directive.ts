import { Directive, ElementRef, Input, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector: '[appImageEffects]'
})

export class ImageEffects {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'filter', 'grayscale(90)');             
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.removeStyle(this.el.nativeElement, 'filter');               
    }
}
