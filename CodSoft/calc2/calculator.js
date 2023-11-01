document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    let currentInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const buttonText = button.textContent;

            if (buttonText === "=") {
                try {
                    currentInput = eval(currentInput);
                } catch (error) {
                    currentInput = "Error";
                }
            } else if (buttonText === "C") {
                currentInput = "";
            } else {
                currentInput += buttonText;
            }

            display.value = currentInput;
        });
    });
});

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

// Function to close the tab from exitbtn
function closeTab() {
    window.close();
}