import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {WebSpeechSynthesisComponent} from './web-speech/web-speech-synthesis.component';
import {GeoLocationComponent} from './geo-location/geo-location.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
    },
    {
        path: 'geo-location',
        component: GeoLocationComponent
    },
    {
        path: 'web-speech',
        children: [
            {
                path: 'synthesis',
                component: WebSpeechSynthesisComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
