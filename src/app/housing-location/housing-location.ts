import { Component } from '@angular/core';
import { input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { RouterModule } from '@angular/router';
// RouterModule is for <a [routerLink]="['/']">  
// routerLink directive enables Angular's router to create dynamic links in the application

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
      <a [routerLink]="['/details', housingLocation().id]">Learn More</a>
    </section>
  `,
  styleUrl: './housing-location.scss'
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
