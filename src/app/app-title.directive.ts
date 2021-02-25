import { Directive, ElementRef, ViewChild } from "@angular/core";

@Directive({
    selector: '[appTitle]'
})
export class AppTitleDirective {
    
    constructor(private element: ElementRef) {
        element.nativeElement.style.color = 'red';
    }
}