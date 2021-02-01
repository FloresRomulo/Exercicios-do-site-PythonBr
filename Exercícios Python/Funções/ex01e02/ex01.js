function logar() {
    let pn1 = document.getElementById('n1')
    let n1 = Number(pn1.value)
    let res = document.getElementById('res')
    res.innerHTML = ''

    for (c=1; c <= n1; c++) {
        let p = 1
        while (p <= c) {
            res.innerHTML += `${p} `
            p++
        }
        res.innerHTML += `<br>`
    }
}