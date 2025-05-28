// Welcome alerts
alert("I'm proud of you, Pamela.");
alert("Keep it up, bb! mwa!");

// Play music when button is clicked
function playMusic() {
  const audio = document.getElementById("bg-music");
  audio.play();
}

// Send hug and launch confetti
function sendHug() {
  alert("Sending virtual hug! 🤗");

  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 }
  });
}
