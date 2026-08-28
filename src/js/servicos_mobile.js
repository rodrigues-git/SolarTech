const slide = document.querySelectorAll('.card')
const botaoAvancar = document.getElementById('botao_avancar')
const botaoVoltar = document.getElementById('botao_voltar')

let slideAtivo = 0;

function esconderSlide(){
    slide.forEach(item => item.classList.remove('ativo'))
}

function mostrarSlide(){
    slide[slideAtivo].classList.add('ativo')
}

function avancarSlide(){
    esconderSlide()
    if(slideAtivo == slide.length -1){
        slideAtivo = 0
    }
    else{
        slideAtivo++
    }
    mostrarSlide()
}

function voltarSlide(){
    esconderSlide()
    if(slideAtivo == 0){
        slideAtivo = slide.length -1
    }
    else{
        slideAtivo--
    }
    mostrarSlide()
}

botaoAvancar.addEventListener('click', avancarSlide)
botaoVoltar.addEventListener('click', voltarSlide)