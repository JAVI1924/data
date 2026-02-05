const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 220 + "px";
  noBtn.style.top = Math.random() * 50 + "px";
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  response.style.display = "block";
  lluviaCorazones();
});

function lluviaCorazones() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 18 + 16 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 250);
}
