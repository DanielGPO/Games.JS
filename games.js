const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('your-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.choices')

let userChoice;
let computerChoice;
let resultado;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
   
    if (randomNumber === 0) {
        computerChoice = 'Pedra'
    }
    if (randomNumber === 1) {
        computerChoice = 'Papel'
    }
    else if (randomNumber === 2) {
        computerChoice = 'Tesoura'
    }
    computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult() {
    if (userChoice === computerChoice) {
        resultado = 'Empate'
    }
    if ( computerChoice === 'Papel' && userChoice === 'Pedra') {
        resultado = 'Você Perdeu!'
    }
    
    if ( computerChoice === 'Tesoura' && userChoice === 'Pedra' ) {
        resultado = 'Você Perdeu!'
    }
    if (computerChoice === 'Pedra' && userChoice === 'Papel' ) {
        resultado = 'Você Ganhou!'
    }
    if (computerChoice === 'Tesoura' && userChoice === 'Papel' ) {
        resultado = 'Você Perdeu!'
    }
    if (computerChoice === 'Pedra' && userChoice === 'Tesoura' ) {
        resultado = 'Você Perdeu!'
    }
    if (computerChoice === 'Papel' && userChoice === 'Tesoura') {
        resultado = 'Você Ganhou!'
    }
    result.innerHTML = resultado
}


// PEDRA PAPEL E TESOURA _______________




const pontuação = document.querySelector('#score')
const grid = document.querySelector('#grid')
const cardArray = [
    {
        name: 'cat',
        img: 'images/cat.png'
    },
    {
        name: 'charmander',
        img: 'images/charmander.jpg'
    },
    {
        name: 'cogumelo',
        img: 'images/cogumelo.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'trevo',
        img: 'images/trevo.jpg'
    },
    {
        name: 'cat',
        img: 'images/cat.png'
    },
    {
        name: 'charmander',
        img: 'images/charmander.jpg'
    },
    {
        name: 'cogumelo',
        img: 'images/cogumelo.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'trevo',
        img: 'images/trevo.jpg'
    }
]


cardArray.sort(() => 0.5 - Math.random());

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', `images/blank.png`);
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card)

    }
}
createBoard();
function checkMath() {
    const imagens = document.querySelectorAll('#grid img')
    const optionOne = cardsChosenIds[0]
    const optionTwo = cardsChosenIds[1]
    
    if (optionOne == optionTwo) {
        imagens[optionOne].setAttribute('src', 'images/blank.png')
        imagens[optionTwo].setAttribute('src', 'images/blank.png')
        alert('Você clicou na mesma imagem!')
    }
if (cardsChosen[0] === cardsChosen[1]) {
        imagens[optionOne].setAttribute('src', 'images/white.png')
        imagens[optionTwo].setAttribute('src', 'images/white.png')
       
        imagens[optionOne].removeEventListener('click', flipCard)
        imagens[optionTwo].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        imagens[optionOne].setAttribute('src', 'images/blank.png')
        imagens[optionTwo].setAttribute('src', 'images/blank.png')

    }
    pontuação.textContent = cardsWon.length
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length / 2) {
        pontuação.textContent = 'Parabéns, você ganhou!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMath, 500)
    }
}

//Jogo da memória ___________________________________



const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#pontos')
const btn = document.getElementById('começar')

let resul = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;


btn.addEventListener('click', () => {
    
    function randomSquare() {
        squares.forEach(square => {
            square.classList.remove('mole')
        })
    
        let randomPosition = squares[Math.floor(Math.random() * 9)]
        randomPosition.classList.add('mole')
    
        hitPosition = randomPosition.id
    }
    
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition) {
                resul++;
                score.textContent = resul;
                hitPosition = null
            }
        })
    })
    function moveMole() {
        timerId = setInterval(randomSquare, 500)
    }
    moveMole()
    
    let countDownTimerId = setInterval(countDown, 1000)
    function countDown() {
        currentTime--;
        timeLeft.textContent = currentTime;
    
        if (currentTime == 0) {
            clearInterval(countDownTimerId)
            clearInterval(timerId)
            alert('O tempo acabou. Sua pontuação é ' + resul)
            
        }
    }

})

// Whac-A-Mole________________________-


































