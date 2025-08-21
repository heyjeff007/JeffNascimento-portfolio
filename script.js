document.addEventListener('DOMContentLoaded', function() {
    // Configurar o vídeo para loop reverso
    const video = document.getElementById('galaxyVideo');
    
    if (video) {
        video.addEventListener('ended', function() {
            this.playbackRate = -1;
            this.play();
        });
        
        video.addEventListener('timeupdate', function() {
            if (this.playbackRate === -1 && this.currentTime <= 0) {
                this.playbackRate = 1;
                this.play();
            }
        });
    }

    // Abrir e fechar popups
    const popups = document.querySelectorAll('.popup');
    const links = document.querySelectorAll('.nav-link');
    const closeButtons = document.querySelectorAll('.close');

    // Abrir popup ao clicar no link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            const popup = document.getElementById(pageId);
            
            if (popup) {
                popup.style.display = 'flex';
                // Impede a rolagem da página de fundo quando o popup está aberto
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fechar popup ao clicar no X
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = this.closest('.popup');
            if (popup) {
                popup.style.display = 'none';
                // Restaura a rolagem da página
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Fechar popup ao clicar fora do conteúdo
    popups.forEach(popup => {
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                // Restaura a rolagem da página
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Fechar popup com a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            popups.forEach(popup => {
                popup.style.display = 'none';
            });
            // Restaura a rolagem da página
            document.body.style.overflow = 'auto';
        }
    });
});
