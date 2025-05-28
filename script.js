function playMusic() {
  const music = document.getElementById('bg-music');
  music.play();
  alert("Playing music 🎵");
}

function sendHug() {
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.6 }
  });
  alert("Sending you a warm hug 💖");
}
