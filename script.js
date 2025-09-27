// Pegar todos os links e abas
const links = document.querySelectorAll(".tablink");
const abas = document.querySelectorAll(".aba");

// Ativar aba ao clicar
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-aba");

    if (!target) return; // ignorar Discord

    // Remover ativo de todas
    links.forEach(l => l.classList.remove("active"));
    abas.forEach(a => a.classList.remove("ativa"));

    // Ativar clicada
    link.classList.add("active");
    document.getElementById(target).classList.add("ativa");
  });
});
