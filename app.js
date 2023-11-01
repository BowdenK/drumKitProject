
const s1 = document.getElementById('boom');
const s2 = document.getElementById('clap');
const s3 = document.getElementById('hihat');
const s4 = document.getElementById('kick');
const s5 = document.getElementById('openhat');
const s6 = document.getElementById('ride');
const s7 = document.getElementById('snare');
const s8 = document.getElementById('tink');
const s9 = document.getElementById('tom');

let boomTxt = document.getElementById('boomTxt');
let clapTxt = document.getElementById('clapTxt');
let hihatTxt = document.getElementById('hihatTxt');
let kickTxt = document.getElementById('kickTxt');
let openhatTxt = document.getElementById('openhatTxt');
let rideTxt = document.getElementById('rideTxt');
let snareTxt = document.getElementById('snareTxt');
let tinkTxt = document.getElementById('tinkTxt');
let tomTxt = document.getElementById('tomTxt');

giveClickListener(boomTxt, 'a');
giveClickListener(clapTxt, 's');
giveClickListener(hihatTxt, 'd');
giveClickListener(kickTxt, 'f');
giveClickListener(openhatTxt, 'g');
giveClickListener(rideTxt, 'h');
giveClickListener(snareTxt, 'j');
giveClickListener(tinkTxt, 'k');
giveClickListener(tomTxt, 'l');

function giveClickListener(ele, command){
    ele.addEventListener('click', (event) => {hitDrum(command);})
}

document.addEventListener('keydown', (event) => {
    if(event.repeat){return;}
    
    hitDrum(event.key)
    clapTxt.textContent = event.key;
})

function startAudio(sound){
    sound.currentTime = 0
    sound.play()
}

function hitDrum (input){
    
    switch(input){
        case 'a':
            console.log('BOOM!!');
            startAudio(s1)
            break;
        case 's':
            console.log('CLAP!!');
            startAudio(s2);
            break;
        case 'd':
            console.log('HiHat!!');
            startAudio(s3);
            break;
        case 'f':
            console.log('Kick!!');
            startAudio(s4);
            break;
        case 'g':
            console.log('OpenHat!!');
            startAudio(s5);
            break;
        case 'h':
            console.log('Ride!!');
            startAudio(s6);
            break;
        case 'j':
            console.log('Snare!!');
            startAudio(s7);
            break;
        case 'k':
            console.log('Tink!!');
            startAudio(s8);
            break;
        case 'l':
            console.log('Tom!!');
            startAudio(s9);
            break;
    }
}


//console.log('hello there');