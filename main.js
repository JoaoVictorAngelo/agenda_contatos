const form = document.getElementById('formulario')
const tabelaContatos = document.querySelector('tbody')

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarContato()

})

function adicionarContato(){
    const nomeContato = document.getElementById('nome-contato').value
    const numeroContato = document.getElementById('numero-contato').value

    let linha = '<tr>'
    linha += `<td>${nomeContato}</td>`
    linha += `<td>${numeroContato}</td>`
    linha += `</tr>`

    tabelaContatos.innerHTML += linha

    nomeContato = ''
    numeroContato = ''
}