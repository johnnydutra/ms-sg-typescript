/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';

export interface Markable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  markerColor: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(markable: Markable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markable.location.lat,
        lng: markable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
