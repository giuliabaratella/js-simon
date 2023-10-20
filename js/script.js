// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.



simonSays();

// funzione generale
function simonSays () {

    const boxNumbers = document.getElementById('box-numbers'); 


    numGen = getNumbers();
    boxNumbers.innerHTML = numGen;
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


// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}