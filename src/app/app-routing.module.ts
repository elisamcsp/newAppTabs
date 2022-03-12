import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'client-page',
    loadChildren: () => import('./page/client-page/client-page.module').then( m => m.ClientPagePageModule)
  },
  {
    path: 'reservation-page',
    loadChildren: () => import('./page/reservation-page/reservation-page.module').then( m => m.ReservationPagePageModule)
  },
  {
    path: 'product-page',
    loadChildren: () => import('./page/products-page/products-page.module').then( m => m.ProductsPagePageModule)
  },  {
    path: 'client-edit-page',
    loadChildren: () => import('./page/client-edit-page/client-edit-page.module').then( m => m.ClientEditPagePageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
