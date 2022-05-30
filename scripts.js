let saida1 ="";
let saida2 ="";
function calculaIgualdade(){
    let frase1 = document.getElementById("frase1").value.toLowerCase();
    let frase2 = document.getElementById("frase2").value.toLowerCase();
    let frase1array ;
    let frase2array ;
    let FirstTime = 1;
    let diferente = 0;
    let position = 0;

    frase1array = frase1.split(" ");
    frase2array = frase2.split(" ");
    // expected output: "oz"
    saida1 = "";
    saida2 = "";
    frase1array.map(function(valor, pos) {
    // if ( valor === frase2array[pos] ){
    //     saida1 += valor
    //     saida2 += valor
    // }
    if ( valor != frase2array[pos]  ){
        if ( FirstTime == 1 ){
            saida1 += "[";
            saida2 += "[";
            FirstTime = 0;
            diferente = 1;
        }
    }
    else { 
        FirstTime = 1;
    }

    if ( diferente == 1 && FirstTime == 1){
        
        saida1 += "]"
        saida2 += "]"
        diferente = 0;
    }
    saida1 += valor + " ";
    saida2 += frase2array[pos] + " ";
    
    position = pos;
  })
  if(frase2array[position+1]){
      position++
      while (frase2array[position]){
        saida2 += frase2array[position];
        position++
      }

      saida1 += "]"
      saida2 += "]"
  }

  alert(saida1);
  alert(saida2);
}

// O pássaro amarelo caiu
// O pássaro vermelho caiu
// exemplos usados no site do dojo