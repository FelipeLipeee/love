const folder = document.getElementById('folder');
const folderContent = document.querySelector('.folder-content');
let currentSection = 0;

// Defina a data do casamento
const weddingDate = new Date("2025-12-20T00:00:00").getTime();

// Função de contagem regressiva
function startCountdown() {
    const contador = document.getElementById('contador');
    setInterval(() => {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Cálculo do tempo restante
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Exibir o resultado
        contador.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Se a contagem terminar, exibir mensagem
        if (distance < 0) {
            clearInterval(); // Para o intervalo
            contador.innerHTML = "O grande dia chegou! 🎉💍";
        }
    }, 1000);
}

// Evento de clique para abrir o folder
document.addEventListener('DOMContentLoaded', () => {
    startCountdown(); // Iniciar contagem regressiva ao carregar a página
});

// Adicionando navegação entre seções
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        if (currentSection < 2) currentSection++;
        updateSection();
    } else if (event.key === 'ArrowLeft') {
        if (currentSection > 0) currentSection--;
        updateSection();
    }
});

function updateSection() {
    folderContent.style.transform = `translateX(-${currentSection * 100}%)`;
}
