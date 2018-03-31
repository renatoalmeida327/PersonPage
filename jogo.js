function novoJogo(){
    return (Math.floor((Math.random() * 100) + 1));
}

function tentativa (numero, choice){
    if (numero == choice){
        return 0;
    } else if (numero > choice){
        return -1;
    } else {
        return 1;
    }
}
  var jogo = novoJogo();
  var res;
  while (res != 0){
      escolha = prompt ("Tente acertar o número correto para acessar a página! (1-100)");
      res = tentativa (jogo, escolha);

  if (res == 1){
     alert ("Tente um número menor");
  } else if (res == -1){
      alert ("Tente um número maior");
  } 
}

 

alert ("Acertou!");