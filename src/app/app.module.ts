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
import {WebSpeechSynthesisComponent} from './web-speech/web-speech-synthesis.component';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {GeoLocationComponent} from './geo-location/geo-location.component';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        WebSpeechSynthesisComponent,
        GeoLocationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSnackBarModule,
        MatToolbarModule,
        DdrExtensionsModule,
        DdrMaterialExtensionsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
