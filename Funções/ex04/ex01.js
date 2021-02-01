function logar() {
    let res = document.getElementById('res')
    res.innerHTML = ''
    let pn1 = document.getElementById('n1')
    let n1 = Number(pn1.value)
    if (n1 < 0){
        res.innerHTML += 'Negativo'
    } else {
        res.innerHTML += 'Positivo'
    }
}