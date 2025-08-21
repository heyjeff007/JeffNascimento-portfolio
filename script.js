document.addEventListener('DOMContentLoaded', function() {
    // Configurar o vídeo para loop reverso
    const video = document.getElementById('galaxyVideo');
    
    // Quando o vídeo terminar, reproduzir em reverso
    video.addEventListener('ended', function() {
        this.playbackRate = -1;
        this.play();
    });
    
    // Quando o vídeo chegar ao início (quando estiver reproduzindo em reverso)
    video.addEventListener('timeupdate', function() {
        if (this.playbackRate === -1 && this.currentTime <= 0) {
            this.playbackRate = 1;
            this.play();
        }
    });

    // Abrir e fechar popups
    const popups = document.querySelectorAll('.popup');
    const links = document.querySelectorAll('.nav-link');
    const closeButtons = document.querySelectorAll('.close');

    // Abrir popup ao clicar no link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            document.getElementById(pageId).style.display = 'flex';
        });
    });

    // Fechar popup ao clicar no X
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.popup').style.display = 'none';
        });
    });

    // Fechar popup ao clicar fora do conteúdo
    popups.forEach(popup => {
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
});
