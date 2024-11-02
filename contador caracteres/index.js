const texto = document.getElementById('texto');
const contador = document.getElementById('contador');
const limite = document.getElementById('limite');
const progressBar = document.getElementById('progress-bar');

texto.addEventListener('input', () => {
    const caracteres = texto.value.length;
    contador.textContent = caracteres;
    progressBar.value = caracteres;

    if (caracteres > limite.textContent) {
        texto.style.borderColor = 'red';
    } else {
        texto.style.borderColor = '#ccc';
    }
});