const botoes = document.querySelectorAll('.botao_faq')

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {

        const resposta = botao.nextElementSibling

        if(resposta.style.display == 'block'){
             resposta.style.display = 'none'
        }
        else{
            resposta.style.display = 'block'
        }
       
    })
}) 
