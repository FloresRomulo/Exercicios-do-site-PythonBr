function logar() {
    let res = document.getElementById('res');
    let pn1 = document.getElementById('n1')
    let n1 = Number(pn1.value)
    let pn2 = document.getElementById('n2')
    let n2 = Number(pn2.value)
    let soma = 0
    res.innerHTML = ``
    
    for (c=n1+1; c < n2; c++) {
        soma += c
        res.innerHTML += `${c} `
    }
    res.innerHTML += `<br>A soma entre os números é ${soma}`
}
