function mes(d) {
    meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
    return meses[d-1]
}

function logar() {
    let data = new Date() // pega a data atual
    let data2 = document.getElementById('data').value
    let res = document.getElementById('res')
    let nova2 = data2.split("/") // separa a data pega pelo html em uma array
    let dia = nova2[0]
    let mês = mes(nova2[1])
    let ano = nova2[2]
    if (dia < 1 || dia > 31) {
        window.alert('Dia inválido. Digite novamente.')
    } else if (mês == undefined) {
        window.alert('Mês inválido. Tente novamente.')
    } else if (ano < 1900 || ano > data.getFullYear() || ano == undefined) {
        window.alert(`Digite um ano entre 1900 e ${data.getFullYear()}`)
    } else {
        res.innerHTML = `${dia} de ${mês} de ${ano}`
    }
}