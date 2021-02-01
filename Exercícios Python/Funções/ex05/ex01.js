function logar() {
    let res = document.getElementById('res')
    res.innerHTML = ''
    let pn1 = document.getElementById('custo')
    let custo = Number(pn1.value)
    let pn2 = document.getElementById('imposto')
    let imposto = Number(pn2.value)
    let custoReal = custo + custo * imposto / 100
    res.innerHTML += `O custo desse produto é: ${custoReal.toLocaleString('pt-BR', {style: 'currency', 
    currency: 'BRL'})}`
}