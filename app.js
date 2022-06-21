const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or possibleChoices.length instead of 3

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Égalité petit'
    }
   
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Bravo le crabe, tu as gagné'
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Bien tenté moustique mais tu as perdu'
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Lerooooooy Jenkins, you win'
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Oh no, adios loser'
    }

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'GG you win master'
    }

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Touché coulé ratus'
    }

    resultDisplay.innerHTML = result

}
