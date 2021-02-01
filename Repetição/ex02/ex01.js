// Quando logar, mudar toda a section e escrever boas vindas
function logar() {
    let login  = document.getElementById('login')
    let senha = document.getElementById('senha')
    let logado = document.getElementById('res')
    if (login.value == senha.value) {
        window.alert('[ERRO] Login e senha devem ser diferentes.')
    } else {
        logado.textContent = `Seja bem-vindo ${login.value}`
    }
}
