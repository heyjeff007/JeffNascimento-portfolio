const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const video = document.getElementById("bg-video");

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    // Mudar para tema escuro
    body.classList.remove("light");
    body.classList.add("dark");
    themeToggle.textContent = "☀️";

    // Reproduzir o vídeo (sem loop)
    video.currentTime = 0;
    video.play();
    video.loop = false;
  } else {
    // Mudar para tema claro
    body.classList.remove("dark");
    body.classList.add("light");
    themeToggle.textContent = "🌙";

    // Pausar e resetar o vídeo
    video.pause();
    video.currentTime = 0;
  }
});
