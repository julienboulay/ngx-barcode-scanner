import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarcodeScannerLivestreamRouteComponent } from './+barcode-scanner-livestream';
import { BarcodeScannerOverlayRouteComponent } from './+barcode-scanner-livestream-overlay';


// Route Configuration
export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/livestream',
        pathMatch: 'full'
    },
    {
        path: 'livestream',
        component: BarcodeScannerLivestreamRouteComponent,
    },
    {
        path: 'livestream-overlay',
        component: BarcodeScannerOverlayRouteComponent,
    }
];

export const appRoutingProviders: any[] = [
];

// Export routes
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
