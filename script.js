const button = document.getElementById("clickyBoi");
const result = document.getElementById("result");
const example = document.getElementById("example");

const inputElOne = document.getElementById("input-one");
const inputElTwo = document.getElementById("input-two");
const inputElThree = document.getElementById("input-three");
const inputElFour = document.getElementById("input-four");
const inputElBackground = document.getElementById("input-background");

const demoboxOneEl = document.getElementById("demobox-one");
const demoboxTwoEl = document.getElementById("demobox-two");
const demoboxThreeEl = document.getElementById("demobox-three");
const demoboxFourEl = document.getElementById("demobox-four");
const demoboxBackgroundEl = document.getElementById("demobox-bg");

const coloursArray = [];
button.addEventListener("click", function () {
  let chosenColourOne = inputElOne.value;
  let chosenColourTwo = inputElTwo.value;
  let chosenColourThree = inputElThree.value;
  let chosenColourFour = inputElFour.value;
  let backgroundColor = inputElBackground.value;

  demoboxOneEl.style.backgroundColor = inputElOne.value;
  demoboxTwoEl.style.backgroundColor = inputElTwo.value;
  demoboxThreeEl.style.backgroundColor = inputElThree.value;
  demoboxFourEl.style.backgroundColor = inputElFour.value;
  demoboxBackgroundEl.style.backgroundColor = inputElBackground.value;

  coloursArray.push(
    chosenColourOne,
    chosenColourTwo,
    chosenColourThree,
    chosenColourFour
  );

  let maximum = 0;
  let highestHex = "";
  for (i = 0; i < coloursArray.length; i++) {
    checkColors(coloursArray[i], backgroundColor);
    var contrast = colorData.contrast;

    if (contrast > maximum) {
      maximum = contrast;
      highestHex = coloursArray[i];
    }
  }

  console.log(highestHex + " " + maximum);
  example.style.color = highestHex;
  example.style.backgroundColor = backgroundColor;

  var contrast = colorData.contrast;
  result.innerHTML = maximum + " - " + highestHex;
});
