 let display = document.getElementById('display');
 let currentInput = '';
 let result = 0;
 let operator = '';

 function appendToDisplay(value) {
     currentInput += value;
     display.value = parseFloat(currentInput); // Parse the input as a float
 }

 function clearDisplay() {
     currentInput = '';
     result = 0;
     operator = '';
     display.value = '';
 }

 function calculate() {
     if (currentInput === '') return;

     if (operator === '+') {
         result += parseFloat(currentInput);
     } else if (operator === '-') {
         result -= parseFloat(currentInput);
     } else if (operator === '*') {
         result *= parseFloat(currentInput);
     } else if (operator === '/') {
         result /= parseFloat(currentInput);
     } else {
         result = parseFloat(currentInput);
     }

     display.value = result;
     currentInput = '';
     operator = '';
 }

 document.addEventListener('keydown', (event) => {
     const key = event.key;
     if (/[0-9\+\-\*\/=]/.test(key)) {
         if (key === '=') key = 'Enter';
         document.querySelector(`button:contains("${key}")`).click();
     }
 });

 function initialize() {
     const buttons = document.querySelectorAll('button');
     buttons.forEach((button) => {
         button.addEventListener('click', () => {
             const buttonText = button.textContent;
             if ('0123456789'.includes(buttonText)) {
                 appendToDisplay(buttonText);
             } else if ('+-*/'.includes(buttonText)) {
                 operator = buttonText;
                 appendToDisplay(buttonText);
             } else if (buttonText === '=') {
                 calculate();
             } else if (buttonText === 'C') {
                 clearDisplay();
             }
         });
     });
 }




// initialize();
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}