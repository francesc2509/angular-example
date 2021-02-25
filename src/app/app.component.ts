import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  items: Item[] = [];
  items$: Observable<Item[]>|undefined = undefined;
  selected: Item|undefined = undefined;
  removedItems: Item[] = [];
  index = 10;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.items$ = this.service.get();
    this.items$.subscribe(
      items => this.items = items,
      err => console.error(err)
    );
  }
    
  onSelectRemoved = (item: Item) => {
    this.items.push(item);
    this.removedItems = this.removedItems.filter(it => it !== item);
  };
  
  onRemovePermanently(item: Item) {
    confirm(`Remove ${item.name} permanently`) ? alert('Removed'): this.onRemove(item);
  }

  onSelect(item: Item) {
    this.selected = item;
  }

  onRemove(item: Item) {
    this.items = this.items.filter(it => it !== item);

    this.removedItems.push(item);
  }

  onAction(item: Item, handler: (item: Item) => void) {
    handler(item);
  }

  onSend(item: Item) {
    this.service.add(item).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
}
