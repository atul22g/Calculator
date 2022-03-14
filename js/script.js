let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "←") {
      var value = screenValue;
      screenValue = value.substr(0, value.length - 1);
      screen.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      screenValue = "";
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

// loading
var preloader = document.getElementById("loading");
function myFunction() {
  preloader.style.display = "none";
}
