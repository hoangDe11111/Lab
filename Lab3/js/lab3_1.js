let multiply = (num1, num2) => num1 * num2;

let multiplyNumbers = () => {
  let num1 = parseFloat(document.getElementById("multiplyNum1").value);
  let num2 = parseFloat(document.getElementById("multiplyNum2").value);
  let result = multiply(num1, num2);
  document.getElementById("multiplyResult").innerText = result;
};

let toCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);

let convertToCelsius = () => {
  let fahrenheit = parseFloat(
    document.getElementById("toCelsiusInput").value
  );
  let result = `${toCelsius(fahrenheit)} °C`;
  document.getElementById("toCelsiusResult").innerText = result;
};

let padZeros = (num, totalLen) => {
  let numStr = num.toString();
  let numZeros = totalLen - numStr.length;
  for (let i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
};

let addZeros = () => {
  let num = parseInt(document.getElementById("padZerosNum").value);
  let totalLen = parseInt(
    document.getElementById("padZerosTotalLen").value
  );
  let result = padZeros(num, totalLen);
  document.getElementById("padZerosResult").innerText = result;
};

let power = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

let calculatePower = () => {
  let base = parseInt(document.getElementById("powerBase").value);
  let exponent = parseInt(document.getElementById("powerExponent").value);
  let result = power(base, exponent);
  document.getElementById("powerResult").innerText = result;
};

let greet = (who) => `Hello ${who}`;

let greetUser = () => {
  let name = document.getElementById("greetInput").value;
  let result = greet(name);
  document.getElementById("greetResult").innerText = result;
};