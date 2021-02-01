function logar() {
    let res = document.getElementById('res')
    res.innerHTML = ''
    let pn1 = document.getElementById('n1')
    let n1 = Number(pn1.value)
    let pn2 = document.getElementById('n2')
    let n2 = Number(pn2.value)
    let pn3 = document.getElementById('n3')
    let n3 = Number(pn3.value)
    res.innerHTML += `${n1+n2+n3}`
}