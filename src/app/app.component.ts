import {Component, OnInit} from '@angular/core';
import {MapDataService} from "./_services/map-data.service";
import {MapObject} from "./_models/map-object";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  center: google.maps.LatLngLiteral = {lat: 52.19375164942309, lng: 20.929972786702205};
  markerClusterImages = 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m';
  mapObjects: MapObject[] = [];

  constructor(public mapDataService: MapDataService) { }

  ngOnInit(): void {
    this.mapDataService.getMapTestData().subscribe((mapObjects: MapObject[]) => this.mapObjects = mapObjects);
  }

  getMarkerPosition(mapObject: MapObject): google.maps.LatLng {
    return new google.maps.LatLng({lat: mapObject.location.latitude, lng: mapObject.location.longitude});
  }

  getMarkerIcon(mapObject: MapObject): string {
    if (mapObject.discriminator === 'vehicle') {
      if (mapObject.type === 'CAR') {
        if (mapObject.status === 'AVAILABLE') return '/assets/images/car_available.png'
        else return '/assets/images/car_unavailable.png'
      }
      else {
        if (mapObject.status === 'AVAILABLE') return '/assets/images/truck_available.png'
        else return '/assets/images/truck_unavailable.png'
      }
    }
    else if (mapObject.discriminator === 'parking') return '/assets/images/parking.png'
    else return '/assets/images/poi.png'
  }
}
