

document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    
    if (welcomeScreen) {
        // Mostrar por 3 segundos luego desaparecer
        setTimeout(() => {
            welcomeScreen.classList.add('hide');
            
            // Eliminar completamente después de la animación
            setTimeout(() => {
                welcomeScreen.remove();
            }, 1000);
        }, 1500);
    }
     // Control de videos de fondo
     const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    let currentVideo = video1;

    // Función para ocultar videos de fondo
    function hideBackgroundVideos() {
        video1.style.opacity = '0';
        video2.style.opacity = '0';
    }

    // Función para mostrar videos de fondo
    function showBackgroundVideos() {
        currentVideo.style.opacity = '0.6';
    }

    // Controlador de eventos para los iframes de Vimeo
    function setupVimeoPlayers() {
        const videoContainers = document.querySelectorAll('.video-container');
        
        videoContainers.forEach(container => {
            const iframe = container.querySelector('iframe');
            
            // Observar cuando el mouse entra al contenedor
            container.addEventListener('mouseenter', () => {
                hideBackgroundVideos();
            });
            
            // Observar cuando el mouse sale del contenedor
            container.addEventListener('mouseleave', () => {
                showBackgroundVideos();
            });
            
            // Permitir clics directos en el iframe
            iframe.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    }

    // Inicialización de videos de fondo
    function initBackgroundVideos() {
        [video1, video2].forEach(video => {
            video.style.opacity = video === currentVideo ? '0.5' : '0';
            video.play().catch(e => console.log(e));
        });

        setInterval(() => {
            currentVideo.style.opacity = '0';
            currentVideo = currentVideo === video1 ? video2 : video1;
            currentVideo.style.opacity = '1';
        }, 30000);
    }

    // Inicialización
    setupVimeoPlayers();
    initBackgroundVideos();
});
