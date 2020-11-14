import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-geo-location',
    templateUrl: './geo-location.component.html',
})
export class GeoLocationComponent implements OnInit, OnDestroy
{
    public currentPosition: Position;

    public watchPosition: Position;

    private watchId: number;

    constructor(private snackBar: MatSnackBar)
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        if (!navigator.geolocation) {
            this.snackBar.open('Geolocation is not supported by your browser', 'OK', {duration: 2000});
            return;
        }

        this.getCurrentPosition();
        this.watchId = navigator.geolocation.watchPosition(
            position => this.watchPosition = position,
            error => this.snackBar.open(error.message, 'OK', {duration: 2000}),
            {enableHighAccuracy: true}
        );
    }

    /**
     * @override
     */
    public ngOnDestroy()
    {
        navigator.geolocation.clearWatch(this.watchId);
    }

    public getCurrentPosition()
    {
        navigator.geolocation.getCurrentPosition(
            position => this.currentPosition = position,
            error => this.snackBar.open(error.message, 'OK', {duration: 2000})
        );
    }
}
