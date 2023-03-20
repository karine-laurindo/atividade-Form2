const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{

    let valor = document.getElementById('valor').value
    let consumo = document.getElementById('consumo').value
    let outvalorKG = document.getElementById('outvalorKG')

    let valor1 = (valor * consumo) / 1000

    outvalorKG.textContent = `Valor a pagar R$: ${valor1}`

})