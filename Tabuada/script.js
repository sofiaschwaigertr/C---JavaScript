function calcularTabuada() {
    var num_tabuada = parseInt(document.getElementById("num_tabuada").value);
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    if (num_tabuada >= 0 && num_tabuada <= 10) {
        for (var cont = 1; cont <= 10; cont++) {
            resultadoDiv.innerHTML += "<p>" + num_tabuada + " X " + cont + " = " + (num_tabuada * cont) + "</p>";
        }
    } else {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número de 0 a 10(sou burro).</p>";
    }
}
