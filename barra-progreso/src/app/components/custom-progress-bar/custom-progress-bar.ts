import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-custom-progress-bar',
  styleUrl: './custom-progress-bar.css',
  templateUrl: './custom-progress-bar.html',
})
export class CustomProgressBarComponent {

  // Inputs obligatorios del ejercicio
  value = input<number>(0);
  color = input<string>('primary');

  // Ampliación
  striped = input<boolean>(false);
  animated = input<boolean>(false);
  showLabel = input<boolean>(false);
  height = input<number>(16);

  // El valor se limita entre 0 y 100
  getValue() {
    return Math.min(100, Math.max(0, this.value()));
  }

  getClasses() {
    let classes = 'progress-bar bg-' + this.color();
    if (this.striped() || this.animated()) {
      classes += ' progress-bar-striped';
    }
    if (this.animated()) {
      classes += ' progress-bar-animated';
    }
    return classes;
  }
}
