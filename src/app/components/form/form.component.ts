import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges, OnInit {

  readonly formGroup = new FormGroup({
    name: new FormControl('')
  });

  @Input()
  item: Item|undefined = undefined;
  
  @Output()
  send = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
    if (this.item) {
      return;
    }

    this.item = this.item || { name: '', id: -1 };
  }

  ngOnChanges(): void {
    const value = this.item ? this.item.name: '';
    this.formGroup.get('name')?.setValue(value);
  }

  onSend(event: Event) {
    //event.preventDefault();

    if (this.item) {
      this.item.name = this.formGroup.get('name')?.value;
    }

    this.send.emit(this.item)
  }
}
