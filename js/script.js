
simonSays();

// funzione generale
function simonSays () {

    const boxNumbers = document.getElementById('box-numbers'); 
    const btn =  document.getElementById('button'); 
    const winBox = document.getElementById('win-box');
    const inputBox = document.getElementById('input-box');

    let numGen = getNumbers();
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
        inputBox.classList.remove('d-none');
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
        // console.log(numGen);
        // console.log(arrayUser);

        let guessedNumbers = [];
        for (let i = 0; i < numGen.length; i++){
            if (numGen.includes(arrayUser[i])){
                guessedNumbers.push(arrayUser[i]);
            }
        }
        // console.log(guessedNumbers)
        winBox.classList.remove ('d-none');
        winBox.innerHTML = `Hai indovinato ${guessedNumbers.length} numeri!
        <div class= "fw-bold"> ${guessedNumbers} </div>
        I numeri da indovinare erano:
        <div class= "fw-bold">${numGen}</div>` 
    }


    // utility
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}