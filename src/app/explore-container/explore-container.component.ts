import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() value: string;
  @Input() urlPage: string;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  goToNewPageNavCtrl(){
      this.navCtrl.navigateForward(this.urlPage);    
  }
}
