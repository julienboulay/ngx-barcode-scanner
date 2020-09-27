import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcodeScannerLivestreamRouteComponent } from './barcode-scanner-livestream';
import { BarcodeScannerOverlayRouteComponent } from './barcode-scanner-livestream-overlay';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/livestream',
    pathMatch: 'full',
  },
  {
    path: 'livestream',
    component: BarcodeScannerLivestreamRouteComponent,
  },
  {
    path: 'livestream-overlay',
    component: BarcodeScannerOverlayRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
