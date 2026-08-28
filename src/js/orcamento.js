const formulario = document.getElementById('form_orcamento')
const mensagem = document.getElementById('confirm_form')


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    mensagem.style.display = 'flex'
    mensagem.style.flexFlow = 'column nowrap'
    mensagem.style.gap = '10px'
    formulario.reset();
})