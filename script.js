// seleciona todos os slides e botões de ponto
const slides = document.querySelectorAll('.slide');
const pontos = document.querySelectorAll('.dot');
let slideAtual = 0;

// inicializa o carrossel no primeiro slide
irParaSlide(0);

// remove a classe ativo de todos os slides e adiciona apenas no escolhido
function irParaSlide(numero) {
    slides.forEach(function(slide) {
        slide.classList.remove('ativo');
});
slides[numero].classList.add('ativo');
slideAtual = numero;
}