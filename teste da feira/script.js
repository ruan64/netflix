// Espera 5 segundos após a animação da introdução e então exibe o conteúdo do site
setTimeout(function() {
    // Esconde a animação de introdução
    document.getElementById('intro').style.display = 'none';

    // Exibe o conteúdo do site
    document.getElementById('site-content').style.opacity = '1';
    document.getElementById('site-content').style.visibility = 'visible';
}, 2500);  // 5000ms = 5 segundos
