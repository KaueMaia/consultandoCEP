let form = document.querySelector('#formularioCEP')
let cep = document.querySelector('#cep')
let resultado = document.querySelector('#infos')

form.addEventListener('submit',function(e){
    e.preventDefault()
    pesquisaCEP(cep.value)
})

let info_cep = {}
function pesquisaCEP(cep){
    const url = 'https://viacep.com.br/ws/' + cep +'/json/'

    fetch(url, {method:'get'})
    .then(response => response.json())
    .then(json => {
        resultado.textContent = 'O CEP '+ json.cep + ' fica na '+ json.logradouro;
        info_cep = json;
    })
    
}