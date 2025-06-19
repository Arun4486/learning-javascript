# Projects related to DOM

## 01 color swticher
## HTML
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

## JS
```
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

# JS
```
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

# JS
```
const clock = document.getElementById('clock');
// const clock = document.queryselector('clock');



setInterval(function(){
    let date = new Date();
    //clock.innerHTML = date.toLocaleDateString();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 for 1 sec

```