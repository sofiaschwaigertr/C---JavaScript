function calcularSalarios() {
    var salario = parseFloat(document.getElementById("salario").value);
    var salario10 = calcular(10, salario);
    var salario15 = calcular(15, salario);
    var salario20 = calcular(20, salario);

    document.getElementById("resultado").innerHTML = `
        <p>O salário 1 é R$ ${salario10.toFixed(2)}</p>
        <p>O salário 2 é R$ ${salario15.toFixed(2)}</p>
        <p>O salário 3 é R$ ${salario20.toFixed(2)}</p>
    `;
}

function calcular(percentual, salario) {
    var novoSalario = salario + (salario * (percentual / 100));
    return novoSalario;
}
