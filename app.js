let clapSLot = document.getElementById('clap');

document.addEventListener('keydown', (event) => {
    clapSLot.textContent = event.key;
    hitDrum(event.key)
})


function hitDrum (input){
    
    switch(input){
        case 'a':
            console.log('BOOM!!');
            break;
        case 's':
            console.log('CLAP!!');
            break;
        case 'd':
            console.log('HiHat!!');
            break;
        case 'f':
            console.log('Kick!!');
            break;
        case 'g':
            console.log('OpenHat!!');
            break;
        case 'h':
            console.log('Ride!!');
            break;
        case 'j':
            console.log('Snare!!');
            break;
        case 'k':
            console.log('Tink!!');
            break;
        case 'l':
            console.log('Tom!!');
            break;
    }
}


//console.log('hello there');