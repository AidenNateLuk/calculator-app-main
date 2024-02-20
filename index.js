const display = document.getElementById("screen");
const toggleBall = document.getElementById("toggle-cursor");
function appendToDisplay(input) {
  display.value += input;
}

function deleteFromDisplay() {
  display.value = display.value.substr(0, display.value.length - 1);
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  if (!display.value) {
    display.value = "Error";
  } else if (display.value === undefined) {
    display.value = "Error";
  } else {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
}

function toggleThemeSecond() {
  toggleBall.textContent = "🟠";
  document.body.classList.add("two");

  document.querySelectorAll("*").forEach(function (element) {
    element.classList.add("two");
  });

  document.querySelectorAll("*").forEach(function (element) {
    element.classList.remove("one");
    element.classList.remove("three");
  });
}
function toggleThemeThird() {
  toggleBall.textContent = "🟡";
  document.body.classList.add("three");

  document.querySelectorAll("*").forEach(function (element) {
    element.classList.add("three");
  });

  document.querySelectorAll("*").forEach(function (element) {
    element.classList.remove("one");
    element.classList.remove("two");
  });
}
function toggleThemeFirst() {
  toggleBall.textContent = "🔴";

  document.querySelectorAll("*").forEach(function (element) {
    element.classList.remove("two");
    element.classList.remove("three");
  });
}
