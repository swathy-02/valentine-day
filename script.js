function yesClicked() {
  document.getElementById("message").innerHTML = "Yayyy 😍💖 Love you forever 🥰🌹";

  window.open("https://www.youtube.com/watch?v=2Vv-BfVoq4g", "_blank");
}

function noClicked() {
  let noBtn = document.getElementById("noBtn");

  let x = Math.random() * 300;
  let y = Math.random() * 300;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}