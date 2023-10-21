// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.



simonSays();

// funzione generale
function simonSays () {

    const boxNumbers = document.getElementById('box-numbers'); 
    const btn =  document.getElementById('button'); 
    const myalert = document.getElementById('warning'); 

    numGen = getNumbers();
    boxNumbers.innerHTML = numGen;
    let seconds = 10;
    const countDown = setInterval(countdown, 1000);
    setTimeout(removeNumbers,10000);

    btn.addEventListener('click', validateUserNumbers);
    


    // FUNZIONI INTERNE

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

    // countdown 
    function countdown(){
        const countdownBox = document.getElementById('countdown');
        if (seconds > 0){
            seconds -=1;
            countdownBox.innerHTML = seconds;
        } else {
            clearInterval(countdown);
        }
    }

    // remove numbers 
    function removeNumbers (){
        const countdownBox = document.getElementById('countdown-box');
        countdownBox.classList.add('d-none');
    }

    // get user numbers 
    function getUserNumbers (){
        const nUser = [];
        const userNumbers = document.getElementsByClassName('user-number');
        
        for (let i = 0; i < userNumbers.length; i++){
            let el = parseInt( userNumbers[i].value);
            console.log(el);
            if (!isNaN(el)){
                nUser.push(el);
            }
        }
        console.log (nUser);
        return nUser;
    }
    
    // validate user numbers 
    function validateUserNumbers (){
        let arrayUser = getUserNumbers();
        console.log(arrayUser);
    }


    // utility
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}