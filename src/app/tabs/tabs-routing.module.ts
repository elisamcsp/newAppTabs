import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [      
      {
        path: 'client',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'reservation',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'product',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/client',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/reservation',
    pathMatch: 'full'
  },
  {
    path: 'clients',
    loadChildren: () => import('../page/client-page/client-page.module').then( m => m.ClientPagePageModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('../page/reservation-page/reservation-page.module').then( m => m.ReservationPagePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../page/products-page/products-page.module').then( m => m.ProductsPagePageModule)
  },
  {
    path: 'client/edit',
    loadChildren: () => import('../page/client-edit-page/client-edit-page.module').then( m => m.ClientEditPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
