import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  imports: [RouterLink],
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  private router = inject(Router);

  // la miga de pan se construye a partir del "data.breadcrumb" definido en cada ruta
  label = signal<string | null>(null);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        this.label.set(route.data['breadcrumb'] ?? null);
      });
  }
}
