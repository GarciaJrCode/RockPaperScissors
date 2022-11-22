/*This code inside the comment tags works the same way as the code outside the comment. Except that this one in comment is not reusable. It is therefore advisable to make sure to write a reusable code*/

/*let rockChoice = document.getElementById('rock')
let paperChoice = document.getElementById('paper')
let cisorChoice = document.getElementById('cisor')
let resetAll = document.getElementById('resetAll')

const choiceComputer =['Rock', 'Paper', 'Scissors']
let takeChoiceComputer = choiceComputer[Math.floor(Math.random() * 3)]

let countScore = 0

rockChoice.onclick=()=>{
    let takeChoiceComputer = choiceComputer[Math.floor(Math.random() * 3)]
    let takeValue = document.getElementById('fightBattle')
    let takeScore = document.getElementById('showScore')
    takeValue.innerHTML = `👱 Rock vs 🤖 ${takeChoiceComputer}`
    if(takeChoiceComputer == "Scissors"){
        let winner = document.getElementById('showResult')
        winner.innerHTML = 'You Won, congratulations'
        countScore += 1
        takeScore.innerHTML=`${countScore}`
    }else if(takeChoiceComputer == "Rock"){
        let winner = document.getElementById('showResult')
        winner.innerHTML = 'There is no winner, woooo'
        takeScore.innerHTML=`${countScore}`
    } else{
        let winner = document.getElementById('showResult')
        winner.innerHTML = 'You lose, looseeeer'
        countScore -= 1
        takeScore.innerHTML=`${countScore}`
    }
}

paperChoice.onclick=()=>{
    let takeChoiceComputer = choiceComputer[Math.floor(Math.random() * 3)]
    let takeValue = document.getElementById('fightBattle')
    let takeScore = document.getElementById('showScore')
    takeValue.innerHTML = `👱 Paper vs 🤖 ${takeChoiceComputer}`
    if(takeChoiceComputer == "Scissors"){
        let winner = document.getElementById('showResult')
        winner.innerHTML = 'You lose, looseeeer'
        countScore -= 1
        takeScore.innerHTML=`${countScore}`
    }else if(takeChoiceComputer == "Rock"){
        let winner = document.getElementById('showResult')
        winner.innerHTML = 'You Won, congratulations'
        countScore += 1
        takeScore.innerHTML=`${countScore}`
    } else{
        let winner = document.getElementById('showResult')
        winner.innerHTML = 'There is no winner, woooo'
        takeScore.innerHTML=`${countScore}`
    }
}

cisorChoice.onclick=()=>{
    let takeChoiceComputer = choiceComputer[Math.floor(Math.random() * 3)]
    let takeValue = document.getElementById('fightBattle')
    let takeScore = document.getElementById('showScore')
    takeValue.innerHTML = `👱 Scissors vs 🤖 ${takeChoiceComputer}`
    if(takeChoiceComputer == "Scissors"){
        let winner = document.getElementById('showResult')
        winner.innerHTML = 'There is no winner, woooo'
        takeScore.innerHTML=`${countScore}`
    }else if(takeChoiceComputer == "Rock"){
        let winner = document.getElementById('showResult')
        winner.innerHTML = 'You lose, looseeeer'
        countScore -= 1
        takeScore.innerHTML=`${countScore}`
    } else{
        let winner = document.getElementById('showResult')
        winner.innerHTML = 'You Won, congratulations'
        countScore += 1
        takeScore.innerHTML=`${countScore}`
    }
}

resetAll.onclick = () => {
    let takeValue = document.getElementById('fightBattle')
    let winner = document.getElementById('showResult')
    let takeScore = document.getElementById('showScore')
    takeValue.innerHTML = ``
    winner.innerHTML = ''
    takeScore.innerHTML=``
}
*/







function getComputerChoice() {
    let tableChoice = ['Rock', 'Paper', 'Scissors']
    let computerChoice = tableChoice[Math.floor(Math.random() * 3)]
    return computerChoice
  }
  
  function getResult(playerChoice, computerChoice) {
    
    let score;
  
    if (playerChoice === computerChoice) {
      score = 0
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper") ) {
      score = 1
    }else {
      score = -1
    }
    return score
  }
  
  function showResult(score, playerChoice, computerChoice) {
    
    let result = document.getElementById('showResult')
    switch (score) {
      case -1:
        result.innerText = "You lose, looseeeer"
        break;
      case 0:
        result.innerText = "There is no winner, woooo"
        break;
      case 1:
        result.innerText = "You Won, congratulations"
        break;
    }
  
    let playerScore = document.getElementById('showScore')
    let hands = document.getElementById('fightBattle')
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
      hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  }
  
  function ifWeClick(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)

    showResult(score, playerChoice.value, computerChoice)
  }
  
  function playGame() {

    let rpsButtons = document.querySelectorAll('.choice')
  
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => ifWeClick(rpsButton)
    })
  
    let endGameButton = document.getElementById('resetAll')
    endGameButton.onclick = () => clearAll()
  }
  
  function clearAll() {
    let playerScore = document.getElementById('showScore')
    let hands = document.getElementById('fightBattle')
    let result = document.getElementById('showResult')
    playerScore.innerHTML =''
    hands.innerHTML =''
    result.innerHTML =''
  }
  
  playGame()