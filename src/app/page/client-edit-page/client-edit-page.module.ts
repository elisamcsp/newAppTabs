import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientEditPagePageRoutingModule } from './client-edit-page-routing.module';

import { ClientEditPagePage } from './client-edit-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientEditPagePageRoutingModule
  ],
  declarations: [ClientEditPagePage]
})
export class ClientEditPagePageModule {}
