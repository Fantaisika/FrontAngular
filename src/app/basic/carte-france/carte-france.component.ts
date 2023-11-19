import { Component, OnInit} from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-carte-france',
  templateUrl: './carte-france.component.html',
  styleUrls: ['./carte-france.component.scss']
})
export class CarteFranceComponent implements OnInit {
  private map: any;

  ngOnInit(){
    this.map = L.map('map').setView([46.603354, 1.888334], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
}
  


