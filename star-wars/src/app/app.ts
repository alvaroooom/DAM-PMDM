import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Breadcrumb } from './components/breadcrumb/breadcrumb';

@Component({
  imports: [RouterOutlet, Breadcrumb],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
