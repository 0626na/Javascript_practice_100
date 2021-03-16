const btn = document.getElementById("btn");
let hex = document.getElementById("hex-value");

btn.addEventListener("click", handleChangeColorHex);

function handleChangeColorHex() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let color =
    "#" +
    r.toString(16).toUpperCase() +
    g.toString(16).toUpperCase() +
    b.toString(16).toUpperCase();

  hex.innerText = color;
  document.body.style.backgroundColor = color;
}
