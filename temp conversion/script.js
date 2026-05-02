/*const minimum=1;
const maximum=100;
const answer=Math.floor(Math.random()*(maximum -minimum+1));

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt("guess a number between 1 and 100: ");
    guess=Number(guess);/*

    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }else if(guess < minimum || guess > maximum){
        window.alert("please enter a valid number");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("too low!! try again");
        }else if(guess > answer){
            window.alert("too high!! try again");
        }else{
            window.alert(`correct! the answer was ${answer}. it took you ${attempts}attempts`);
        }
    }
}*/
const textbox = document.getElementById("textbox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
function convert(){
    if(toFarenheit.checked){
        temp = Number(textbox.value);
        temp =temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp =(temp-32) * 5/9;
        result.textContent = temp.toFixed(1) + "C";
    }else{
        result.textContent = "select a unit";
    }
}

