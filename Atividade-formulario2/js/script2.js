// const btn = document.getElementById('btn')
// btn.addEventListener('click', ()=>{
//     //Criar referência dos elementos da página
//    let inTitulo = document.getElementById('inTitulo')
//    let inTempo = document.getElementById('inTempo')
//    let outTitulo = document.getElementById('outTitulo')
//    let outTempo = document.getElementById('outTempo')

//    //Obter conteúdo dos campos

//    let titulo = inTitulo.value

//    //Conversão de string -> número
//    let duracao = Number(inTempo.value)


//     //Lógica da aplicação
//     let horas = Math.floor(duracao / 60)
//     let minutos = duracao % 60

//    //Saída de dados
//    outTitulo.textContent = `${titulo}`
//    outTempo.textContent = `${horas} hora(s) e ${minutos} Minuto(s)`
// })

const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{

    //Criar referência dos elementos da página
   let tipo = document.getElementById('tipo')
   let valor = document.getElementById('valor')
   let outTipo = document.getElementById('outTipo')
   let outvalor = document.getElementById('outvalor')
   let outsaldo = document.getElementById('outsaldo')

   //Obter conteúdo dos campos

   let valor1 = Number(valor.value)

   //Conversão de string -> número
   //let duracao = Number(valor.value)


    //Lógica da aplicação
    let entrada = valor1 * 0.5
    let saldo = entrada /12

   //Saída de dados
   tipo.textContent = `${tipo}`
   outTipo.textContent = `${valor1}`
   outvalor.textContent = `Entrada de R$ ${entrada}`
   outsaldo.textContent = `12x R$ ${saldo}`
})
