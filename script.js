// Greeting alerts
alert("I'm proud of you, Pamela.");
alert("Keep it up, bb! mwa!");

// Function to play background music
function playMusic() {
    const music = document.getElementById("bg-music");
    music.play();
}

// Confetti + Hug alert
function sendHug() {
    alert("Sending virtual hug! 🤗");
    startConfetti();
}

// Load confetti library and trigger
function startConfetti() {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
    script.onload = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    };
    document.body.appendChild(script);
}
