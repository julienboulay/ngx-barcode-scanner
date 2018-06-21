import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { BarecodeScannerLivestreamComponent } from '../../lib/modules/barcode-scanner-livestream';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                BarecodeScannerLivestreamComponent,
            ],
            imports: [
                FormsModule,
                HttpClientModule,
                ModalModule.forRoot()
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();

        // Allow to use the component once the test is finished
        fixture.autoDetectChanges();
    }));

    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');

        // Allow to use the component once the test is finished
        fixture.autoDetectChanges();
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to the Initial components library for Angular !');

        // Allow to use the component once the test is finished
        fixture.autoDetectChanges();
    }));
});
