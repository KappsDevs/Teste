const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let playBtn = document.querySelector('#button');

let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition;

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('mole');
    })

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 2;
            score.textContent = result;
        }
    })
})

function moveMole(){
    let timer = null;
    timer = setInterval(randomSquare, 1000);
}



function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
        location.reload();
    }
}


let timerId; 

function handleClick() {
    moveMole();
    timerId = setInterval(countDown, 1000);

  
    playBtn.removeEventListener('click', handleClick);
}

playBtn.addEventListener('click', handleClick);
