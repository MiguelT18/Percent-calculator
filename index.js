function calculatePercent(number, percent) {
  const calculatePercent = (number * percent) / 100;
  return calculatePercent;
}

function onclickButtonPercent() {
  const inputNumber = document.getElementById("numberInp");
  const numberValue = Number(inputNumber.value);

  const inputPercent = document.getElementById("percentInp");
  const percentValue = Number(inputPercent.value);

  const percentCalculator = calculatePercent(numberValue, percentValue);
  const resultPercent = document.getElementById("result");
  resultPercent.innerText =
    "The " +
    percentValue +
    "%" +
    " of " +
    numberValue +
    " is " +
    percentCalculator;
}
