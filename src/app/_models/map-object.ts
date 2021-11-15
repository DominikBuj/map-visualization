import {Picture} from "./picture";
import {MapColor} from "./map-color";
import {Location} from "./location";

export interface MapObject {
  discriminator: string;
  platesNumber: string;
  sideNumber: string;
  color: string;
  type: string;
  picture: Picture;
  rangeKm: string;
  batteryLevelPct: number;
  reservationEnd: number;
  reservation: string;
  status: string;
  locationDescription: string;
  address: string;
  mapColor: MapColor;
  promotion: string;
  id: string;
  name: string;
  description: string;
  location: Location;
  metadata: string;
}
