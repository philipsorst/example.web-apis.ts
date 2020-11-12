import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    templateUrl: './web-speech-synthesis.component.html',
})
export class WebSpeechSynthesisComponent implements OnInit
{
    private synth: SpeechSynthesis = window.speechSynthesis;

    public voice: SpeechSynthesisVoice;

    public voices: SpeechSynthesisVoice[];

    public text: string = 'Hello World';

    public rate: number = 1;

    public pitch: number = 1;

    constructor(private snackBar: MatSnackBar)
    {
    }

    /**
     * @override
     */
    public ngOnInit(): void
    {
        this.populateVoiceList();
        this.synth.addEventListener('voiceschanged', () => {
            this.populateVoiceList();
        })

    }

    private populateVoiceList()
    {
        this.voices = this.synth.getVoices().sort((a, b) => {
            const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
            if (aname < bname) return -1;
            else if (aname == bname) return 0;
            else return +1;
        });
        this.voice = this.voices.find(voice => voice.default);
    }

    public speak()
    {
        if (this.synth.speaking) {
            this.snackBar.open('speechSynthesis.speaking', 'OK', {duration: 2000});
            console.error('speechSynthesis.speaking');
            return;
        }
        if (this.text !== '') {

            console.log({
                text: this.text,
                voice: this.voice,
                pitch: this.pitch,
                rate: this.rate
            });

            const utterThis = new SpeechSynthesisUtterance(this.text);
            utterThis.onend = function (event) {
                console.log('SpeechSynthesisUtterance.onend');
            }
            utterThis.onerror = function (event) {
                console.error('SpeechSynthesisUtterance.onerror');
            }
            utterThis.voice = this.voice;
            utterThis.pitch = this.pitch;
            utterThis.rate = this.rate;
            this.synth.speak(utterThis);
        }
    }
}

//     var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
//     voiceSelect.innerHTML = '';
//     for(i = 0; i < voices.length ; i++) {
//         var option = document.createElement('option');
//         option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
//
//         if(voices[i].default) {
//             option.textContent += ' -- DEFAULT';
//         }
//
//         option.setAttribute('data-lang', voices[i].lang);
//         option.setAttribute('data-name', voices[i].name);
//         voiceSelect.appendChild(option);
//     }
//     voiceSelect.selectedIndex = selectedIndex;
// }
//
//     populateVoiceList();
//     if (speechSynthesis.onvoiceschanged !== undefined) {
//     speechSynthesis.onvoiceschanged = populateVoiceList;
// }
//

//
// inputForm.onsubmit = function(event) {
//     event.preventDefault();
//
//     speak();
//
//     inputTxt.blur();
// }
//
// pitch.onchange = function() {
//     pitchValue.textContent = pitch.value;
// }
//
// rate.onchange = function() {
//     rateValue.textContent = rate.value;
// }
//
// voiceSelect.onchange = function(){
//     speak();
// }
//
// }
