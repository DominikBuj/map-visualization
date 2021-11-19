import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MapObject} from "../_models/map-object";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MapDataService {
  readonly testData = '[' +
    '{"discriminator":"vehicle","platesNumber":"WZPV001","sideNumber":"Z3-PVAN-01","color":"White","type":"TRUCK","picture":{"id":"e7ace1de-ab7f-4120-922d-23441a041bd9","name":"e7ace1de-ab7f-4120-922d-23441a041bd9","extension":null,"contentType":null},"rangeKm":193,"batteryLevelPct":98,"reservationEnd":null,"reservation":null,"status":"AVAILABLE","locationDescription":null,"address":null,"mapColor":{"rgb":"ffffff","alpha":0.5},"promotion":null,"id":"00000000-0000-0000-0005-000000000003","name":"Enigma Python Van","description":null,"location":{"latitude":52.1935161702226,"longitude":20.9304286193486},"metadata":null},' +
    '{"discriminator":"vehicle","platesNumber":"WZ8748W","sideNumber":"Z1-WH-01","color":"White","type":"TRUCK","picture":{"id":"9818875c-9e8b-4dc5-98ae-5909a8d632e2","name":"9818875c-9e8b-4dc5-98ae-5909a8d632e2","extension":null,"contentType":null},"rangeKm":134,"batteryLevelPct":86,"reservationEnd":null,"reservation":null,"status":"UNAVAILABLE","locationDescription":null,"address":null,"mapColor":{"rgb":"ffffff","alpha":0.5},"promotion":null,"id":"00000000-0000-0000-0005-000000000001","name":"Nissan Leaf White","description":null,"location":{"latitude":52.193275,"longitude":20.930372},"metadata":null},' +
    '{"discriminator":"vehicle","platesNumber":"WZPC001","sideNumber":"Z4-PCAR-01","color":"White","type":"CAR","picture":{"id":"61133b4c-2e9b-4da9-b22c-009baad8eadd","name":"61133b4c-2e9b-4da9-b22c-009baad8eadd","extension":null,"contentType":null},"rangeKm":193,"batteryLevelPct":98,"reservationEnd":null,"reservation":null,"status":"AVAILABLE","locationDescription":null,"address":null,"mapColor":{"rgb":"ffffff","alpha":0.5},"promotion":null,"id":"00000000-0000-0000-0005-000000000004","name":"Enigma Python Car","description":null,"location":{"latitude":52.193891367697,"longitude":20.930564789789},"metadata":null},' +
    '{"discriminator":"vehicle","platesNumber":"WZPC001","sideNumber":"Z4-PCAR-01","color":"White","type":"CAR","picture":{"id":"61133b4c-2e9b-4da9-b22c-009baad8eadd","name":"61133b4c-2e9b-4da9-b22c-009baad8eadd","extension":null,"contentType":null},"rangeKm":193,"batteryLevelPct":98,"reservationEnd":null,"reservation":null,"status":"UNAVAILABLE","locationDescription":null,"address":null,"mapColor":{"rgb":"ffffff","alpha":0.5},"promotion":null,"id":"00000000-0000-0000-0005-000000000004","name":"Enigma Python Car","description":null,"location":{"latitude":52.193832078251376,"longitude":20.931430240605643},"metadata":null},' +
    '{"discriminator":"parking","platesNumber":"WZPC001","sideNumber":"Z4-PCAR-01","color":"White","type":"CAR","picture":{"id":"61133b4c-2e9b-4da9-b22c-009baad8eadd","name":"61133b4c-2e9b-4da9-b22c-009baad8eadd","extension":null,"contentType":null},"rangeKm":193,"batteryLevelPct":98,"reservationEnd":null,"reservation":null,"status":"AVAILABLE","locationDescription":null,"address":null,"mapColor":{"rgb":"ffffff","alpha":0.5},"promotion":null,"id":"00000000-0000-0000-0005-000000000004","name":"Enigma Python Car","description":null,"location":{"latitude":52.19336019705198,"longitude":20.93158745437105},"metadata":null},' +
    '{"discriminator":"POI","platesNumber":"WZPC001","sideNumber":"Z4-PCAR-01","color":"White","type":"CAR","picture":{"id":"61133b4c-2e9b-4da9-b22c-009baad8eadd","name":"61133b4c-2e9b-4da9-b22c-009baad8eadd","extension":null,"contentType":null},"rangeKm":193,"batteryLevelPct":98,"reservationEnd":null,"reservation":null,"status":"AVAILABLE","locationDescription":null,"address":null,"mapColor":{"rgb":"ffffff","alpha":0.5},"promotion":null,"id":"00000000-0000-0000-0005-000000000004","name":"Enigma Python Car","description":null,"location":{"latitude":52.192985670487026,"longitude":20.930428068217285},"metadata":null}' +
    ']';

  constructor(private http: HttpClient) { }

  getMapTestData(): Observable<MapObject[]> {
    return of(<MapObject[]>JSON.parse(this.testData));
  }
}
