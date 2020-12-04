import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss'],
})
export class NameFormComponent implements OnInit {
  name = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  StartGame() {
    if (this.name.length === 0) return;
    this.router.navigate(['/game'], {
      queryParams: {
        name: this.name,
      },
    });
  }
}
