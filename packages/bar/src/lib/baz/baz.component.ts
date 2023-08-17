import { Component } from '@angular/core';
import { BarComponent } from '@my-org/foo';

@Component({
  selector: 'myorg-baz',
  standalone: true,
  imports: [BarComponent],
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.css'],
})
export class BazComponent {}
