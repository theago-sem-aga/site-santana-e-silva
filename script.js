const slides = document.querySelectorAll('.slide');

const pontos = document.querySelectorAll('.dot');

let slideAtual = 0;

irParaSlide(0);

function irParaSlide(numero) {
    slides.forEach(function(slide) {
        slide.classList.remove('ativo');
});

slides[numero].classList.add('ativo');

slideAtual = numero;
}