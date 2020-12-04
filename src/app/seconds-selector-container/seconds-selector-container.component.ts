import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seconds-selector-container',
  templateUrl: './seconds-selector-container.component.html',
  styleUrls: ['./seconds-selector-container.component.scss'],
})
export class SecondsSelectorContainerComponent implements OnInit {
  @Input() inProcess: boolean;
  @Output() onChecked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  check(event: Event) {
    if (this.inProcess) {
      return;
    }
    const { value } = event.target as HTMLInputElement;
    this.onChecked.emit(value);
  }
}
