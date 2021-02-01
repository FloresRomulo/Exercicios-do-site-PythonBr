function logar() {
    let res = document.getElementById('res');
    let pn1 = document.getElementById('pop1')
    let n1 = Number(pn1.value)
    let pn2 = document.getElementById('pop2')
    let n2 = Number(pn2.value)
    let pcreN1 = document.getElementById('crePop1')
    let creN1 = Number(pcreN1.value)
    let pcreN2 = document.getElementById("crePop2")
    let creN2 = Number(pcreN2.value)
    res.innerHTML = ``
    res.innerHTML += `<br>Tam Pop 1: ${Math.round(n1)}<br>Tam Pop 2: ${Math.round(n2)}<br>Ano: 0<br>`
    
    for (c=1; n1 < n2; c++) {
        n1 += n1 * creN1 / 100
        n2 += n2 * creN2 / 100
        res.innerHTML += `<br>Tam Pop 1: ${Math.round(n1)}<br>Tam Pop 2: ${Math.round(n2)}<br>Ano: ${c}<br>`
    }
}
