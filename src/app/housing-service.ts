import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    // For more advanced use cases consider using HttpClient provided by Angular.
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  // Notice the fetch method has been updated to query the data for location with 
  // a matching id property value. See URL Search Parameter for more information.
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/search
  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
