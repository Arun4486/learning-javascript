# Projects related to DOM

## 01 color swticher
## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../style.css">
    <title>BG color switcher</title>
</head>
<body>
    <nav>
        <a href="/" aria-current="page">Home</a>
        <a target="_blank" href="youtube.com"> Youtube</a>
    </nav>
    <div class="canvas">
        <h1>Color Scheme Switcher</h1>
    <span class="button" id="grey"></span>
    <span class="button" id="white"></span>
    <span class="button" id="blue"></span>
    <span class="button" id="yellow"></span>
    <h2>Click color to change to background color</h2>
    </div>
    <script src="chaiaurcode.js"></script>
</body>
</html>
```
## JS
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        if(e.target.id== 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id== 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id== 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id== 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        
    })
})
```
# 02 BMI calculator
# html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../style.css">
    <title>BMI Calculator</title>
</head>
<body>
    <nav>
        <a href="/" aria-current="page">home</a>
        <a target="_blank" href="youtube.com">Youtube</a>
    </nav>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form>
            <p><label>Height in cm : </label><input type="text" id="height"></p>
            <p><label>Weight in kg : </label><input type="text" id="weight"></p>
            <button>Calculate</button>
            <div id="result"></div>
            <div id="weight-guide">
                <h3>BMI Weight Guide</h3>
                <p>less than 18.6 = Under weight</p>
                <p>18.6-24.9 = Normal Range</p>
                <p>Greater than 24.9 = Over weight</p>
            </div>
        </form>
    </div>
</body>
<script src="chaiaurcode.js"></script>
</html>
```
# JS
```javascript
const form = document.querySelector('form');
// this usecase will give empty value as page reloads, without event
// const h = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);

    const res = document.querySelector('#result');

    if(h === ''|| h < 0 || isNaN(h)){
        res.innerHTML = `Please give a valid height ${h}`;
    }
    else if(w === ''|| w < 0 || isNaN(w)){
        res.innerHTML = `Please give a valid weight ${w}`;
    }
    else{
        const bmi = (w/((h*h)/10000)).toFixed(2);
        if(bmi<18.6){
            res.innerHTML = `${bmi} you are under weight`;
        }else if(bmi > 18.6 && bmi <24.9){
            res.innerHTML = `${bmi} your weight is in normal range`;
        }else{
            res.innerHTML = `${bmi} you are overweight`;
        }
        // show the result
        //res.innerHTML = `<span>${bmi}</span>`
    }
})
```
# Digital clock
# html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Digital clock</title>
    <style>
        body{
            background-color: #212121;
            color: #fff;
        }
        .center {
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        #clock {
            font-size: 40px;
            background-color: rgb(22, 1, 254);
            padding: 20px 50px;
            margin-top: 10px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <nav>
        <a href="/" aria-current="page">Home</a>
        <a target="_blank" href="youtube.com">Youtube</a>
    </nav>
    <div class="center">
        <div id="banner"><span>Your Local Time</span></div>
        <div id="clock"></div>
    </div>
    <script src="chaiaurcode.js"></script>
</body>
</html>
```
# JS
```javascript
const clock = document.getElementById('clock');
// const clock = document.queryselector('clock');



setInterval(function(){
    let date = new Date();
    //clock.innerHTML = date.toLocaleDateString();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 for 1 sec

```

# html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Guess The NUmber</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <nav>
        <a href="/" aria-current="page">Home</a>
        <a target="_blank" href="youtube.com">Youtube</a>
    </nav>
    <div id="wrapper" style="display: flex; align-items: center; flex-direction: column; justify-content: center;">
        <h1>Number Guessing game</h1>
        <p>Try and guess a random no. 1-100</p>
        <p>You have 10 attempts to guess the roght no.</p>
    </br>
        <form class="form">
            <label for="guessFeild" id="guess" style="font-size: 50px;">Guess a No.</label> </form><br>
            <input type="text" id="guessFeild" class="guessFeild">
            <button type="submit" id="subt">Submit Guess</button>
            <!-- <input type="submit" id="subt" value="Submit guess"> -->
        </form>
        <div class="resultParas">
            <p>Previous Guesses: <span class="guesses"></span></p>
            <p>Guesses Remaining: <span class="lastResult"></span></p>
            <p class="lowOrHigh"></p>
        </div>
    </div>
    <script src="chaiaurcode.js"></script>
</body>
</html>
```
# JS
```javascript
let randomNumber = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        //console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess){
    //to limit the input
    if(isNaN(guess)){
        alert('Please enter a valid no.');
    }
    else if(guess < 1){
        alert('enter a no. greater than 0');
    }else if(guess > 100){
        alert('Please enter a no. less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`Game over. Random no. was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // to guide the user
    if(guess === randomNumber){
        displayMessage(`You Guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`No. is too low`);
    }else if(guess > randomNumber){
        displayMessage(`no. is too high`);
    }
}

function displayGuess(guess){
    //
    userInput.value = ''; // cleanup input feild
    guessSlot.innerHTML += `${guess} `
    numGuesses++;
    if(numGuesses>11){
        remaining.innerHTML = `you have used all your attempts`;
    }else{
        remaining.innerHTML = `${11- numGuesses}`;
    }
}
function displayMessage(message){
    //DOM manipulation
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame(){
    
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        lowOrHigh.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    //
    })
}

```
