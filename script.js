var score = 0;
var timer = 60;
var randomNumber = 0;
var callCount = 0;
var hitvalue = () =>{
    randomNumber = Math.floor(Math.random()*20)
    document.querySelector("#hitValue").textContent = randomNumber;
}
var makeBubble = () =>{
    var clutter = "";
    for(var i = 0; i <= 492; i++){
        var randomNum = Math.floor(Math.random()*20)
        clutter += `<div class="item">${randomNum}</div>`;
    }
    
    document.querySelector(".area").innerHTML = clutter;
    
}

var runtimer = () =>{
    var timerINterval = setInterval( () => {
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerINterval);
            document.querySelector(".area").innerHTML = `<h1>Game Over <br>You Scored ${score}</h1>`;

        }
    }, 1000);
}

var calculateScore = () =>{
    score += 10;
    document.querySelector("#Score").textContent = score;
}
var deductScore = () =>{
    callCount++;
    score -= 10;
    document.querySelector("#Score").textContent = score;
}

makeBubble();
runtimer();
hitvalue();

var bubbleContainer = document.querySelector("#bubbleContainer");
    bubbleContainer.addEventListener("click", (details) =>{
        var clickedValue = Number(details.target.textContent);
        if(clickedValue === randomNumber){
            calculateScore();
            makeBubble();
            hitvalue();
        }
        else if(callCount > 2){
            timer = 0;
            document.querySelector(".area").innerHTML = `<h1>You Lost <br>You Scored ${score}</h1>`;
            document.querySelector("#timer").textContent = timer;

            
        }
        else{
            deductScore();
            hitvalue();
            makeBubble();
           }
        
    })
