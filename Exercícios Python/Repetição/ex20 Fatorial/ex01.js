function logar() {
    let pn1 = document.getElementById('n1')
    let n1 = Number(pn1.value)
    let res = document.getElementById('res')
    let soma = 1
    res.innerHTML = ''

    for (c=n1; c > 0; c--) {
        soma *= c
        res.innerHTML += `${c} `
        if (c != 1) {
            res.innerHTML += "x "
        }
    }
    res.innerHTML += `= ${soma}`
}
