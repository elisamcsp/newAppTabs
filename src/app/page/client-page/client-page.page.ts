import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.page.html',
  styleUrls: ['./client-page.page.scss'],
})
export class ClientPagePage implements OnInit {

  clients: any[] = [
    {"id": "1", "name": "Cliente 1", "dni": "DNI1", "address": "address 1", "avatar": "../../../assets/avatar-ben.png"},
    {"id": "2", "name": "Cliente 2", "dni": "DNI2", "address": "address 2", "avatar": "../../../assets/avatar-finn.png"},
    {"id": "3", "name": "Cliente 3", "dni": "DNI3", "address": "address 3", "avatar": "../../../assets/avatar-han.png"},
    {"id": "4", "name": "Cliente 4", "dni": "DNI4", "address": "address 4", "avatar": "../../../assets/avatar-yoda.png"},
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
