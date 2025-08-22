const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const video = document.getElementById("bg-video");

// Seleciona todos os ícones que vão mudar de tema
const projectIcon = document.querySelector('.navbar li:nth-child(1) img');
const infoIcon = document.querySelector('.navbar li:nth-child(2) img');

themeToggle.addEventListener("click", () => {
  // Desativa o botão enquanto o vídeo muda
  themeToggle.disabled = true;

  if (body.classList.contains("light")) {
    // Mudar para tema escuro
    body.classList.remove("light");
    body.classList.add("dark");
    themeToggle.textContent = "☀️";

    // Troca os ícones para versão escura
    projectIcon.src = "images/projectwhite.png";
    infoIcon.src = "images/infomwhite.png";

    // Vídeo: do início até 5 segundos
    video.currentTime = 0;
    video.playbackRate = 5;
    video.loop = false;
    video.play();

    const stopDark = () => {
      if (video.currentTime >= 5) {
        video.pause();
        video.removeEventListener("timeupdate", stopDark);
        themeToggle.disabled = false; // Reativa o botão
      }
    };
    video.addEventListener("timeupdate", stopDark);

  } else {
    // Mudar para tema claro
    body.classList.remove("dark");
    body.classList.add("light");
    themeToggle.textContent = "🌙";

    // Troca os ícones para versão clara
    projectIcon.src = "images/project.png";
    infoIcon.src = "images/infon.png";

    // Vídeo: continuar tocando até o final
    video.playbackRate = 5;
    video.loop = false;
    video.play();

    const stopAtEnd = () => {
      if (video.currentTime >= video.duration) {
        // Reinicia no 1s e para
        video.currentTime = 0;
        video.pause();
        video.removeEventListener("timeupdate", stopAtEnd);
        themeToggle.disabled = false; // Reativa o botão
      }
    };
    video.addEventListener("timeupdate", stopAtEnd);
  }
});
