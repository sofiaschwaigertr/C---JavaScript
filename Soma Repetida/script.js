function calcular() {
    var n1 = parseInt(document.getElementById('n1').value);
    var nx_n1 = parseInt(document.getElementById('nx_n1').value);
    var resultado = mns(n1, nx_n1);
    document.getElementById('resultado').textContent = "RESPOSTA: " + resultado;
  }
  
  function mns(num, repeticoes) {
    var resultado = 0;
    for (var i = 0; i < repeticoes; i++) {
      resultado += num;
    }
    return resultado;
  }

  