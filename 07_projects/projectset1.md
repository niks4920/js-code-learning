# Project related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)
    switch(e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id
        break;
      case 'white':
        body.style.backgroundColor = e.target.id
        break;  
      case 'blue':
          body.style.backgroundColor = e.target.id
          break;
      case 'yellow':
          body.style.backgroundColor = e.target.id
          break;  
    }
  })
})
```
## Project 2

```
const form = document.querySelector('form');
// this use case will give you empty values
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    if(bmi<18.6) {
        result.innerHTML = `<span>${bmi}<br>Under Weight</span>`
    } else if (bmi>=18.6 && bmi<=24.9) {
        result.innerHTML = `<span>${bmi}<br>Normal Range</span>`
    } else if (bmi>24.9) {
         result.innerHTML = `<span>${bmi}<br>Overweight</span>`
    }
  }
});
```
## Project 3

```
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000);
```

## Project 4

```
let randomNumber = parseInt(Math.random()*100+1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let prevGuess = []
let numGuess = 1
let playGame = true
const p = document.createElement('p')

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  if(isNaN(guess)) {
    alert('Please enter valid number')
  } else if (guess <1) {
    alert('Number should be more than 1')
  } else if (guess > 100) {
    alert('Number should be less than 100')
  } else {
    prevGuess.push(guess)
    if(numGuess === 10) {
      cleanUp(guess)
      displayMessage (`Game over. Random number was ${randomNumber}`)
      endGame()
    } else {
      cleanUp(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`)
    endGame()
  }else if(guess < randomNumber) {
    displayMessage('Number is too low')
  }else if(guess > randomNumber) {
    displayMessage('Number is too high')
  }
}

function cleanUp(guess) {
  userInput.value = ''
  guessSlot.innerHTML = `${prevGuess}`
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
 lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.append(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random()*100+1)
  prevGuess = []
  numGuess = 1
  guessSlot.innerHTML = ''
  userInput.removeAttribute('disabled')
  remaining.innerHTML = `${11-numGuess}`
  startOver.removeChild(p)
  playGame = true
  displayMessage('')
  })
}
```

