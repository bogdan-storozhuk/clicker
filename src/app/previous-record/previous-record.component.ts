import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-record',
  templateUrl: './previous-record.component.html',
  styleUrls: ['./previous-record.component.scss'],
})
export class PreviousRecordComponent implements OnInit {
  @Input() previousRecord: number;
  @Input() selectedTime: number;
  constructor() {}

  ngOnInit(): void {}
}
