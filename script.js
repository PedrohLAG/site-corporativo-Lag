// script.js

// Função para mostrar um alerta ao clicar no botão CTA
function exibirAlertaCta() {
    alert("Preparando as melhores soluções para você! Em breve, mais detalhes.");
}

// Função para atualizar uma mensagem na página com a data e hora
function atualizarMensagemDinamica() {
    const elementoMensagem = document.querySelector('.mensagem-dinamica');
    if (elementoMensagem) {
        const dataAtual = new Date();
        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const ano = dataAtual.getFullYear();
        const horas = String(dataAtual.getHours()).padStart(2, '0');
        const minutos = String(dataAtual.getMinutes()).padStart(2, '0');

        elementoMensagem.textContent = `Página atualizada em ${dia}/${mes}/${ano} às ${horas}:${minutos}.`;
    }
}

// Adiciona um "ouvinte de evento" ao botão CTA
//codigo feito com ajuda do gemini para correçao de erros
const ctaButton = document.getElementById('cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', exibirAlertaCta);
}

// Chama a função para atualizar a mensagem dinâmica quando a página é carregada
document.addEventListener('DOMContentLoaded', atualizarMensagemDinamica);

// Implementa o scroll suave para os links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Pega o ID da seção (ex: #sobre-nos)
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Subtrai a altura do cabeçalho fixo
                behavior: 'smooth' // Efeito de scroll suave
            });
        }
    });
});

console.log("LAG.tech.com: Script JS carregado e funcionando.");