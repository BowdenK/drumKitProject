// Assigning Sound and output Text

const s1 = document.getElementById('boom');
const s2 = document.getElementById('clap');
const s3 = document.getElementById('hihat');
const s4 = document.getElementById('kick');
const s5 = document.getElementById('openhat');
const s6 = document.getElementById('ride');
const s7 = document.getElementById('snare');
const s8 = document.getElementById('tink');
const s9 = document.getElementById('tom');

let output = document.getElementById('output');

// Assigning Interactive Elements
// Note: getElementsByClassName returns array.

let boomPad = document.getElementsByClassName('boomPad');
let clapPad = document.getElementsByClassName('clapPad');
let hihatPad = document.getElementsByClassName('hihatPad');
let kickPad = document.getElementsByClassName('kickPad');
let openhatPad = document.getElementsByClassName('openhatPad');
let ridePad = document.getElementsByClassName('ridePad');
let snarePad = document.getElementsByClassName('snarePad');
let tinkPad = document.getElementsByClassName('tinkPad');
let tomPad = document.getElementsByClassName('tomPad');

giveClickListener(boomPad, 'a');
giveClickListener(clapPad, 's');
giveClickListener(hihatPad, 'd');
giveClickListener(kickPad, 'f');
giveClickListener(openhatPad, 'g');
giveClickListener(ridePad, 'h');
giveClickListener(snarePad, 'j');
giveClickListener(tinkPad, 'k');
giveClickListener(tomPad, 'l');

function giveClickListener(ele, command){
    ele[0].addEventListener('click', (event) => {hitDrum(command);})
}

// Logic

document.addEventListener('keydown', (event) => {
    if(event.repeat){return;}   //prevents key spamming
    
    hitDrum(event.key)
})

function hitDrum (input){
    
    switch(input){
        case 'a':
            output.textContent = 'BOOM!!';
            startAudio(s1)
            break;
        case 's':
            output.textContent = 'CLAP!!';
            startAudio(s2);
            break;
        case 'd':
            output.textContent = 'HiHat!!';
            startAudio(s3);
            break;
        case 'f':
            output.textContent = 'Kick!!';
            startAudio(s4);
            break;
        case 'g':
            output.textContent = 'OpenHat!!';
            startAudio(s5);
            break;
        case 'h':
            output.textContent = 'Ride!!';
            startAudio(s6);
            break;
        case 'j':
            output.textContent = 'Snare!!';
            startAudio(s7);
            break;
        case 'k':
            output.textContent = 'Tink!!';
            startAudio(s8);
            break;
        case 'l':
            output.textContent = 'Tom!!';
            startAudio(s9);
            break;
    }
}

function startAudio(sound){
    sound.currentTime = 0   //resets sound, allows sound to interrupt itself.
    sound.play()
}