import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appHover]'
})
export class HoverDerective {
    @HostBinding('class.hover') isHover = false;
    @HostListener('mouseenter') onMauseEnter(){
        this.isHover = true;
    }
    @HostListener('mouseleave') onMauseLeave(){
        this.isHover = false;
    }
}