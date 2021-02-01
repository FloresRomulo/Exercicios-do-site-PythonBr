// Quando logar, mudar toda a section e escrever boas vindas
function enviar() {
    let nome = document.getElementById('nome')
    let idade = document.getElementById('idade')
    let salario = document.getElementById('salario')
    let sexo = document.getElementById('sexo')
    let estado = document.getElementById('estado')
    if (nome.value.length <= 3 || 0 > Number(idade.value) || Number(idade.value) > 150 || Number(salario.value) <= 0) {
        window.alert('ERRO')
    } else {
        let res = document.getElementById('res')
        res.innerHTML = 'Enviado com sucesso'
    }
}
