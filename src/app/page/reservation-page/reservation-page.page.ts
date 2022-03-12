import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.page.html',
  styleUrls: ['./reservation-page.page.scss'],
})
export class ReservationPagePage implements OnInit {

  reservations: any[] = [
    {"id": "1", "date": "19-02-2022", "client": "client 1", "status": "cancel"},
    {"id": "2", "date": "19-02-2022", "client": "client 2", "status": "confirm"},
    {"id": "3", "date": "19-02-2022", "client": "client 3", "status": "confirm"},
    {"id": "4", "date": "19-02-2022", "client": "client 4", "status": "confirm"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
