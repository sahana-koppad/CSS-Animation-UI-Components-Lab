let clicks = 0;

function toggleLoader() {
  document.getElementById("loader").classList.toggle("hidden");
}

function toggleMode() {
  document.body.classList.toggle("dark");

  const text = document.getElementById("modeText");
  if (document.body.classList.contains("dark")) {
    text.innerText = "Dark Mode";
  } else {
    text.innerText = "Light Mode";
  }
}

function countClicks() {
  clicks++;
  document.getElementById("clickCount").innerText =
    "Clicked: " + clicks + " times";
}
