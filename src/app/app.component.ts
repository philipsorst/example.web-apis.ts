import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit
{
    constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar)
    {
    }

    /**
     * @override
     */
    public ngOnInit()
    {
        this.swUpdate.available.subscribe(evt => {
            const snack = this.snackBar.open('Update Available', 'Reload', {duration: 5000});
            snack
                .onAction()
                .subscribe(() => {
                    window.location.reload();
                });
        });
    }
}
