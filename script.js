function openSurprise() {
  document.getElementById("surpriseModal").classList.add("show");
  createConfetti();
}

function closeSurprise() {
  document.getElementById("surpriseModal").classList.remove("show");
}

function createConfetti() {
  const colors = [
    "#ffc45c",
    "#ff6b9a",
    "#7dd3fc",
    "#86efac",
    "#c084fc",
    "#ffffff"
  ];

  for (let i = 0; i < 95; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 1.2 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4300);
  }
}

document.addEventListener("click", function(event) {
  const modal = document.getElementById("surpriseModal");

  if (event.target === modal) {
    closeSurprise();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeSurprise();
  }
});