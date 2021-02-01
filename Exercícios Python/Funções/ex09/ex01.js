function reverter(s) {
    let nova = ''
    for (c = s.length - 1; c >= 0; c--) {
        nova += s[c]
    }
    return nova
}

function logar() {
    let pn1 = document.getElementById('txn1')
    let n1 = String(pn1.value)
    let res = document.getElementById('res')
    res.innerHTML = reverter(n1.toLowerCase())
}