import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientEditPagePage } from './client-edit-page.page';

const routes: Routes = [
  {
    path: '',
    component: ClientEditPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientEditPagePageRoutingModule {}
