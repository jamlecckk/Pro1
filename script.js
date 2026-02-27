let display = document.getElementById('display');

function append(val) {
  display.value += val;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch(e) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}