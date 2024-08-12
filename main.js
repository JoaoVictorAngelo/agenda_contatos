const form = document.getElementById('formulario')
const tabelaContatos = document.querySelector('tbody')
const contatos = []

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarContato()

})

function adicionarContato(){
    const nomeContato = document.getElementById('nome-contato').value
    const numeroContato = document.getElementById('numero-contato').value

    if(contatos.includes(numeroContato)){
        alert(`O numero:${numeroContato} ja foi adicionado a lista de contatos`)
    }else {
        contatos.push(numeroContato)
        
        let linha = '<tr>'
        linha += `<td>${nomeContato}</td>`
        linha += `<td>${numeroContato}</td>`
        linha += `</tr>`

        tabelaContatos.innerHTML += linha

        nomeContato = ''
        numeroContato = ''        
    }

}