const entrada = document.getElementById('valor_conta')
const botao = document.getElementById('botao_calculadora')
const form = document.getElementById('form_calculadora')
const container_resultado = document.createElement('div')
container_resultado.setAttribute('id', 'container_resultado')


botao.addEventListener("click", () => {

    container_resultado.replaceChildren();

    form.after(container_resultado)

    const valor_conta = Number(entrada.value)

    economia_mensal = 0.70 * valor_conta

    economia_anual = economia_mensal * 12

    const p1 = document.createElement('p')

    p1.textContent = "Sua economia estimada"

    container_resultado.append(p1)

    const resultado = document.createElement('div')

    container_resultado.append(resultado)

    resultado.setAttribute('id', 'resultado')
    
    const p2 =  document.createElement('p')

    p2.textContent = `R$ ${economia_mensal.toFixed(2)} /mês`

    const p3 = document.createElement('p')

    p3.textContent = `R$ ${economia_anual.toFixed(2)} /ano`

    resultado.append(p2,"|", p3)
})

