
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    var res = document.getElementById('res')
  
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERROR] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(f > i){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        } else{
            for(let c = i; c >=f ; c-=p){
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}



      
   /* if (inicio <= 0 || fim <= 0 || passo <= 0 ) {
        alert('Por favor, insira valores numéricos válidos.')
      } else {
        res.innerHTML = 'Contagem: ';
        if (passo <= 0) {
          res.innerHTML = 'Passo deve ser maior que zero.';
        } else if (inicio <= fim) {
          for (var i = ini; i <= fim; i += passo) {
            res.innerHTML += i + ' ';
          }
        } else {
          for (var i = ini; i >= fim; i -= passo) {
            res.innerHTML += i + ' ';
          }
        }
      }*/