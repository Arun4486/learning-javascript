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