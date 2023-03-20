const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{

    let medicamento = document.getElementById('medicamento').value
    let valor = parseFloat(document.getElementById('valor').value)
    let outPromocao = document.getElementById('outPromocao')
    let outMedicamento = document.getElementById('outMedicamento')

    let promocao = (valor + valor) - 0.20

    outMedicamento.textContent = `${medicamento}`
    outPromocao.textContent = `Leve 2 por apenas R$: ${promocao}`
    

})