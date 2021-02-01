function logar() {
    let pn1 = document.getElementById('n1')
    let n1 = Number(pn1.value)
    let tab = document.getElementById('tabuada')
    tab.innerHTML = `<td>N1 </td> <td>N2 </td> <td>Soma </td>`
    
    for (c=1; c < 11; c++) {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        col1.textContent = `${c} `
        col2.textContent = `${n1} `
        col3.textContent = n1*c
        tab.appendChild(linha)
        tab.appendChild(col1)
        tab.appendChild(col2)
        tab.appendChild(col3)
    }
}
