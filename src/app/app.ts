import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { RouterModule } from '@angular/router'; // for <a [routerLink]="['/']">  

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Home,
    RouterModule
  ],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('ang20-tutorial-2');
  title = 'homes';
}
