import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnDestroy, OnInit {
  name = '';
  clicks = 0;
  selectedTime = 5;
  time = this.selectedTime;
  inProcess = false;
  isClickButtonDisabled = false;
  clickButtonText = 'Click to start';
  previousRecord: number | null;
  intervalId: any;
  timeoutId: any;
  isWon: boolean;

  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      this.name = queryParam['name'];
    });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

  ngOnInit() {
    this.previousRecord = Number(
      localStorage.getItem(this.selectedTime.toString())
    );
  }

  addClick() {
    if (!this.inProcess) {
      this.clickButtonText = 'Click to count';
      this.inProcess = true;
      this.intervalId = setInterval(() => (this.time -= 1), 1000);
      this.timeoutId = setTimeout(() => {
        clearInterval(this.intervalId);
        this.isClickButtonDisabled = true;
        this.inProcess = false;
        this.time = this.selectedTime;
        if (this.previousRecord < this.clicks) {
          this.previousRecord = this.clicks;
          localStorage.setItem(
            this.selectedTime.toString(),
            this.previousRecord.toString()
          );
          this.isWon = true;
          return;
        }
        this.isWon = false;
      }, this.selectedTime * 1000);
      return;
    }
    this.clicks += 1;
  }

  check(value: string) {
    this.previousRecord = Number(localStorage.getItem(value));
    this.selectedTime = Number(value);
    this.time = this.selectedTime;
  }

  reset() {
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
    this.clicks = 0;
    this.time = this.selectedTime;
    this.inProcess = false;
    this.isClickButtonDisabled = false;
    this.clickButtonText = 'Click to start';
  }
}
