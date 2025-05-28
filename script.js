alert("I'm proud of you, Pamela.");
alert("Keep it up, bb! mwa!");

// Play background music
function playMusic() {
  const audio = document.getElementById("bg-music");
  audio.play();
}

// Launch confetti on hug
function sendHug() {
  alert("Sending virtual hug! 🤗");
  confetti({
    particleCount: 180,
    spread: 70,
    origin: { y: 0.6 }
  });
}
