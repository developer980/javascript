/**/
const d0 = document.querySelector("#d0");
const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const d3 = document.querySelector("#d3");
const d4 = document.querySelector("#d4");
const d5 = document.querySelector("#d5");
const d6 = document.querySelector("#d6");
const d7 = document.querySelector("#d7");
const d8 = document.querySelector("#d8");
const d9 = document.querySelector("#d9");
const dC = document.querySelector("#dC");
const equals = document.querySelector("#equals");
const point = document.querySelector("#point");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const disp = document.querySelector("#display");
const disp1 = document.querySelector("#display1");
const H = document.createElement("h1"); /**/

let res = 0;
let nextvalue;
let operator = "";
let oldOperator = "";
let value = "";
let hpValue = "";
let specialOp = 0;

d0.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += "0";
  } else {
    hpValue += "0";
  }
  disp.innerText += d0.innerText;
});

d1.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += "1";
  } else {
    hpValue += "1";
  }
  disp.innerText += d1.innerText;
});

d2.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += "2";
  } else {
    hpValue += "2";
  }
  disp.innerText += d2.innerText;
});

d3.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += "3";
  } else {
    hpValue += "3";
  }
  disp.innerText += d3.innerText;
});

d4.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += "4";
  } else {
    hpValue += "4";
  }
  disp.innerText += d4.innerText;
});

d5.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += "5";
  } else {
    hpValue += "5";
  }
  disp.innerText += d5.innerText;
});

d6.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += "6";
  } else {
    hpValue += "6";
  }
  disp.innerText += d6.innerText;
});

d7.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += "7";
  } else {
    hpValue += "7";
  }
  disp.innerText += d7.innerText;
});

d8.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += "8";
  } else {
    hpValue += "8";
  }
  disp.innerText += d8.innerText;
});

d9.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += "9";
  } else {
    hpValue += "9";
  }
  disp.innerText += d9.innerText;
});

point.addEventListener("click", function () {
  if (operator != "*" && operator != "/") {
    value += ".";
  } else {
    hpValue += ".";
  }
  disp.innerText += point.innerText;
});

plus.addEventListener("click", function () {
  if (hpValue != "") {
    if (operator == "*") {
      specialOp = parseFloat(value) * parseFloat(hpValue);
    } else if (operator == "/") {
      specialOp = parseFloat(value) / parseFloat(hpValue);
    }
    value = `${specialOp}`;
    hpValue = "";
    if (oldOperator != "") {
      operator = oldOperator;
    }
  }
  result(value);
  operator = plus.innerText;
  disp1.innerText = res;
  disp.innerText += operator;
  value = "";
});

minus.addEventListener("click", function () {
  if (hpValue != "") {
    if (operator == "*") {
      specialOp = parseFloat(value) * parseFloat(hpValue);
    } else if (operator == "/") {
      specialOp = parseFloat(value) / parseFloat(hpValue);
    }
    value = `${specialOp}`;
    hpValue = "";
    if (oldOperator != "") {
      operator = oldOperator;
    }
  }
  result(value);
  operator = minus.innerText;
  disp1.innerText = res;
  disp.innerText += operator;
  value = "";
});

multiply.addEventListener("click", function () {
  oldOperator = operator;
  if (hpValue != "") {
    if (operator == "*") {
      specialOp = parseFloat(value) * parseFloat(hpValue);
    } else if (operator == "/") {
      specialOp = parseFloat(value) / parseFloat(hpValue);
    }
    value = `${specialOp}`;
    hpValue = "";
  }
  operator = "*";
  disp.innerText += multiply.innerText;
});

divide.addEventListener("click", function () {
  oldOperator = operator;
  if (hpValue != "") {
    if (operator == "*") {
      specialOp = parseFloat(value) * parseFloat(hpValue);
    } else if (operator == "/") {
      specialOp = parseFloat(value) / parseFloat(hpValue);
    }
    value = `${specialOp}`;
    hpValue = "";
  }
  operator = "/";
  disp.innerText += divide.innerText;
});

equals.addEventListener("click", function () {
  if (hpValue != "") {
    if (operator == "*") {
      specialOp = parseFloat(value) * parseFloat(hpValue);
    } else if (operator == "/") {
      specialOp = parseFloat(value) / parseFloat(hpValue);
    }
    value = `${specialOp}`;
    hpValue = "";
    if (oldOperator != 0) {
      operator = oldOperator;
    }
  }
  result(value);
  value = res;
  operator = "";
  oldOperator = "";
  disp.innerText = "";
  disp1.innerText = res;
  res = 0;
});

dC.addEventListener("click", function () {
  disp.innerText = "";
  disp1.innerText = "";
  res = 0;
  value = "";
  operator = "";
  oldOperator = "";
});

function result(value) {
  switch (operator) {
    case "+":
      res += parseFloat(value);
      break;
    case "-":
      res -= parseFloat(value);
      break;
    /* case "*":
      if (hpValue != "") {
        specialOp = parseFloat(value) * 4;
        value = `${specialOp}`;
      }
      break;
    case "/":
      res /= parseFloat(value);
      break;*/
    case "=":
      res = res;
      break;
    default:
      res += parseFloat(value);
      break;
  }
}
