// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.



simonSays();

// funzione generale
function simonSays () {

    const boxNumbers = document.getElementById('box-numbers'); 
     

    numGen = getNumbers();
    boxNumbers.innerHTML = numGen;
    let seconds = 10;
    const countDown = setInterval(countdown, 1000);
    setTimeout(removeNumbers,10000);
    

    function countdown(){
        const countdownBox = document.getElementById('countdown');
        if (seconds > 0){
            seconds -=1;
            countdownBox.innerHTML = seconds;
        } else {
            clearInterval(countdown);
        }
    }
    
}


// generare i numeri randomici 
function getNumbers (){
    const min = 1;
    const max = 100;
    const nToGen = 5;
    const nGen = [];
    

    while (nGen.length < nToGen){
        let n = getRndInteger (min, max);
        if (!nGen.includes(n)){
            nGen.push(n);
        }
    }
    console.log (nGen);
    return nGen;
}

function removeNumbers (){
    const boxNumbers = document.getElementById('box-numbers');
    boxNumbers.classList.add('d-none');
}


// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}