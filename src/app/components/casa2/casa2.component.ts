import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-casa2',
  templateUrl: './casa2.component.html',
  styleUrls: ['./casa2.component.scss'],
})
export class Casa2Component  implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new mapboxgl.Map({
      container: 'map-koko', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 14, // starting zoom
      });
  }

  
}
