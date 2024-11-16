document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links do menu de navegação com a classe .a2
    const navLinks = document.querySelectorAll("nav .a2");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Impede o comportamento padrão de clique
            const targetId = this.getAttribute("href").substring(1); // Obtém o ID do destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, // Define o deslocamento para o topo do destino
                    behavior: "smooth" // Habilita a rolagem suave
                });
            }
        });
    });
});