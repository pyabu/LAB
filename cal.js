  let display = document.getElementById("display");

function insert(val) {
  if (display.value === "0" || display.value === "Error") {
    display.value = val;
  } else {
    display.value += val;
  }
}

function clearAll() {
  display.value = "0";
}

function back() {
  display.value = display.value.length > 1
    ? display.value.slice(0, -1)
    : "0";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = "Error";
  }
}

function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function reciprocal() {
  try {
    display.value = 1 / eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function factorial() {
  try {
    let n = eval(display.value);
    if (n < 0 || !Number.isInteger(n)) throw "Invalid";
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}
