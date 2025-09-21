// Exemplo: alerta quando clicar em um link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        alert("Você clicou em um link do EpiCraft!");
    });
});
