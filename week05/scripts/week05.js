let cbdisplay = document.querySelector("#display")

function calculate(a, b) {
    result = a + b;
    return result;
}

function displayResult(result) {
  return('The result is: ' + result);
}
    
let fresult = calculate(2, 3)

cbdisplay.innerHTML = displayResult(fresult)