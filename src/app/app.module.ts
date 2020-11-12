import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {DdrExtensionsModule} from '@dontdrinkandroot/ngx-extensions';
import {DdrMaterialExtensionsModule} from '@dontdrinkandroot/ngx-material-extensions';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {IndexComponent} from './index/index.component';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        MatToolbarModule,
        MatListModule,
        MatSidenavModule,
        DdrExtensionsModule,
        DdrMaterialExtensionsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
