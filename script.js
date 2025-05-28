alert("I'm proud of you, Pamela.");
alert("Keep it up, bb! mwa!");

// Play music
function playMusic() {
  const audio = document.getElementById("bg-music");
  audio.play();
}

// Confetti blast
function sendHug() {
  alert("Sending virtual hug! 🤗");
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}
