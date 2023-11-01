let clapSLot = document.getElementById('clap');


document.addEventListener('keydown', (event) => {
    clapSLot.textContent = event.key;
    hitDrum(event.key)
})


function hitDrum (input){
    if(input == 'a'){
        console.log('CLAP!!')
    }
    //change this to a switch for all elements
}


console.log('hello there');