import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    @Input()
    items: Item[];
    
    @Output()
    select = new EventEmitter<Item>();
    onSelect = (item: Item) => this.select.emit(item);

    @Output()
    remove = new EventEmitter<Item>();
    onRemove = (item: Item) => {
        this.remove.emit(item);
    };

    constructor() {
        this.items = [];
    }

    onClick(event: MouseEvent, item: Item, handler: (item: Item) => void) {
        handler(item)
    }
}