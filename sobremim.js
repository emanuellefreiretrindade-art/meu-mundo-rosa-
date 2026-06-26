// --- JAVASCRIPT ---
const btn = document.getElementById('btnReveal');
const content = document.getElementById('infoContent');

btn.addEventListener('click', () => {
    // Mostra as informações escondidas
    content.style.display = 'block';
    
    // Aciona a chuva de glitter rosa e brilhante
    createGlitterChower();
    
    // Faz a tela descer suavemente até o conteúdo revelado
    setTimeout(() => {
        content.scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

function createGlitterChower() {
    const colors = ['#ff69b4', '#ff1493', '#fff', '#ffd700', '#ffb6c1'];
    
    // Cria 150 partículas de glitter voando pela tela
    for (let i = 0; i < 150; i++) {
        const glitter = document.createElement('div');
        glitter.classList.add('glitter');
        
        // Posição horizontal aleatória na tela
        glitter.style.left = Math.random() * 100 + 'vw';
        
        // Tamanhos variados para um efeito realista
        const size = Math.random() * 6 + 4;
        glitter.style.width = size + 'px';
        glitter.style.height = size + 'px';
        glitter.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Velocidades e atrasos diferentes de queda
        glitter.style.animationDuration = Math.random() * 2 + 1.5 + 's';
        glitter.style.animationDelay = Math.random() * 0.5 + 's';
        
        // Adiciona um brilho luminoso ao redor de cada glitter
        glitter.style.boxShadow = `0 0 ${size}px ${glitter.style.background}`;

        document.body.appendChild(glitter);

        // Remove o elemento do HTML após o término da queda para não sobrecarregar o navegador
        glitter.addEventListener('animationend', () => {
            glitter.remove();
        });
    }
}
