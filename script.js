alert("I'm proud of you, Pamela.");
alert("Keep it up, bb! mwa!");

function sendHug() {
    alert("Sending virtual hug! 🤗");
    startConfetti();
}

// Confetti using canvas-confetti CDN
function startConfetti() {
    const confettiScript = document.createElement('script');
    confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
    confettiScript.onload = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    };
    document.body.appendChild(confettiScript);
}
