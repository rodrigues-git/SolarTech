function expandirMenu(){
    const menu = document.getElementById('menu')

    if (menu.style.display == 'block'){
          menu.style.display = 'none'
    }
    else{
        menu.style.display = 'block'
    }
  
}


const butaoMenu = document.getElementById('burguer')
butaoMenu.addEventListener('click', expandirMenu)



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



