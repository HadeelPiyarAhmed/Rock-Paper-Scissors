const btn = document.querySelectorAll('button');

let playerScore = 0;
let draws = 0;
let AIScore = 0;

 

btn.forEach(function (item) {
    item.addEventListener('click', function() {
        btn[0].disabled=true;
        btn[1].disabled=true;
        btn[2].disabled=true;
        setTimeout(() => {
            btn[0].disabled=false;
            btn[1].disabled=false;
            btn[2].disabled=false;
        }, 1000);
        const computerRandom = Math.floor(Math.random() * 3)
        const choice = Number(item.value);
        const imageSelector= document.querySelector('#playerchoice img');
        const imageSelector2= document.querySelector('#computerchoice img');
        

        switch (choice) {
            case 0: 
            imageSelector.src = './assets/Layer '+ choice +'.png'
            if (computerRandom === 0){
                document.querySelector('h2').innerHTML = "Draw";
                imageSelector2.src = './assets/Layer '+ computerRandom +'.png';
                draws++
            } else if (computerRandom === 1) {
                document.querySelector('h2').innerHTML = "You lost!";
                imageSelector2.src = './assets/Layer '+ computerRandom +'.png';
                AIScore++
            } else if (computerRandom === 2) {
                document.querySelector('h2').innerHTML = "You won!";
                imageSelector2.src = './assets/Layer '+ computerRandom +'.png';
                playerScore++;
            } break;


            case 1: 
            imageSelector.src = './assets/Layer '+ choice +'.png'
            if (computerRandom === 0){
                document.querySelector('h2').innerHTML = "You won!";
                imageSelector2.src = './assets/Layer '+ computerRandom +'.png';
                playerScore++
            } else if (computerRandom === 1) {
                document.querySelector('h2').innerHTML = "Draw";
                imageSelector2.src = './assets/Layer '+ computerRandom +'.png';
                draws++
            } else if (computerRandom === 2) {
                document.querySelector('h2').innerHTML = "You lost!";
                imageSelector2.src = './assets/Layer '+ computerRandom +'.png';
                AIScore++
            } break;

            case 2: 
            imageSelector.src = './assets/Layer '+ choice +'.png'
            if (computerRandom === 0){
                document.querySelector('h2').innerHTML = "You lost!";
                imageSelector2.src = './assets/Layer '+ computerRandom +'.png';
                AIScore++
            } else if (computerRandom === 1) {
                document.querySelector('h2').innerHTML = "You won!";
                imageSelector2.src = './assets/Layer '+ computerRandom +'.png';
                playerScore++
            } else if (computerRandom === 2) {
                document.querySelector('h2').innerHTML = "Draw";
                imageSelector2.src = './assets/Layer '+ computerRandom +'.png';
                draws++
            } break;
        
            default:
                break; 
        }

        document.querySelector('#playerscore span').innerHTML = playerScore;
        document.querySelector('#draws span').innerHTML = draws;
        document.querySelector('#AIscore span').innerHTML = AIScore;
 



    })
    
})