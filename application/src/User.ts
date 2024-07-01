import { faker } from '@faker-js/faker';
import { Markable } from './CustomMap';

export class User implements Markable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }

  markerColor: 'red';
}
