import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-oscillator-node',
    templateUrl: './oscillator-node.component.html'
})
export class OscillatorNodeComponent implements OnInit
{
    private audioContext = new AudioContext();

    private oscillator: OscillatorNode;

    public frequency: number = 440;

    public detune: number = 0;

    public types: OscillatorType[] = ["sine", "square", "sawtooth", "triangle"];

    public type: OscillatorType = "sine";

    constructor()
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        this.createOscilator();
    }

    public stop()
    {
        this.oscillator.stop();
    }

    public setType(type: OscillatorType)
    {
        this.type = type;
        this.oscillator.stop();
        this.oscillator.disconnect();
        this.createOscilator();
    }

    private createOscilator()
    {
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = this.type;
        this.oscillator.frequency.setValueAtTime(this.frequency, this.audioContext.currentTime);
        this.oscillator.detune.setValueAtTime(this.detune, this.audioContext.currentTime)
        this.oscillator.connect(this.audioContext.destination);
        this.oscillator.start();
    }

    public setFrequency(frequency: number)
    {
        this.frequency = frequency;
        this.oscillator.frequency.setValueAtTime(this.frequency, this.audioContext.currentTime);
    }

    public setDetune(detune: number)
    {
        this.detune = detune;
        this.oscillator.detune.setValueAtTime(this.frequency, this.audioContext.currentTime);
    }
}
