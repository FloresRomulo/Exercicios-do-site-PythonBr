function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

function logar() {
    let texto = document.getElementById('tex1').value
    let res = document.getElementById('res')
    let text = texto.split("")
    let emba = shuffle(text)
    let nor = emba.join('')
    
    res.innerHTML = nor

}