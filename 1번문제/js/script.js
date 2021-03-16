const button = document.getElementsByClassName("btn");
const colors = ["red", "orange", "yellow", "green", "blue"];

function handleColorsIndex(max, min) {
  return Math.random() * (max - min) + min;
}
function handleChangeBackground() {
  const colorsNumber = parseInt(handleColorsIndex(0, 5));
  console.log(colorsNumber);
  document.body.style.backgroundColor = colors[colorsNumber];
}

button[0].addEventListener("click", handleChangeBackground);
