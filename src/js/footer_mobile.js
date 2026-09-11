const botoes_footer = document.querySelectorAll('#footer_1 button')

botoes_footer.forEach((botao) => {

    botao.addEventListener('click', () => {
        console.log('clicou')
        const ul = botao.nextElementSibling

        ul.classList.toggle('lista_footer')
    }) 
})
