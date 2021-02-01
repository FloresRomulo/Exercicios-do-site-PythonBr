let data = new Date()
let res2 = document.getElementById('res2')
if (data.getHours() < 10) {
    res2.innerHTML = `0${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
} else {
    res2.innerHTML = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
}
function logar() {
    let res = document.getElementById('res')
    res.innerHTML = ''
    let pn1 = document.getElementById('n1')
    let n1 = Number(pn1.value)
    let pn2 = document.getElementById('n2')
    let n2 = Number(pn2.value)
    let total = n1+n1*(3+(n2/10))/100
    if (n2 != 0) {
        res.innerHTML += `${total.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`
    } else {
        res.innerHTML += `${n1.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`
    }
}