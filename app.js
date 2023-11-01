let clapSLot = document.getElementById('clap');

const s1 = document.getElementById('boom');
const s2 = document.getElementById('clap');
const s3 = document.getElementById('hihat');
const s4 = document.getElementById('kick');
const s5 = document.getElementById('openhat');
const s6 = document.getElementById('ride');
const s7 = document.getElementById('snare');
const s8 = document.getElementById('tink');
const s9 = document.getElementById('tom');

document.addEventListener('keydown', (event) => {
    clapSLot.textContent = event.key;
    hitDrum(event.key)
})


function hitDrum (input){
    
    switch(input){
        case 'a':
            console.log('BOOM!!');
            s1.play();
            break;
        case 's':
            console.log('CLAP!!');
            s2.play();
            break;
        case 'd':
            console.log('HiHat!!');
            s3.play();
            break;
        case 'f':
            console.log('Kick!!');
            s4.play();
            break;
        case 'g':
            console.log('OpenHat!!');
            s5.play();
            break;
        case 'h':
            console.log('Ride!!');
            s6.play();
            break;
        case 'j':
            console.log('Snare!!');
            s7.play();
            break;
        case 'k':
            console.log('Tink!!');
            s8.play();
            break;
        case 'l':
            console.log('Tom!!');
            s9.play();
            break;
    }
}


//console.log('hello there');