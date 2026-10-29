import { Component } from '@angular/core';
import { CustomProgressBarComponent } from '../../components/custom-progress-bar/custom-progress-bar';

@Component({
  imports: [CustomProgressBarComponent],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {}
