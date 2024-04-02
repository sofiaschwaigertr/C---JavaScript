function countdown(x) {
    document.getElementById('output').innerHTML += x + '<br>';
    if (x > 0) {
        setTimeout(function() {
            countdown(x - 1);
        }, 1000); // Aguarda 1 segundo (1000 milissegundos) antes de chamar a função novamente
    }
}

document.getElementById('startButton').addEventListener('click', function() {
    var num = parseInt(document.getElementById('num').value);
    document.getElementById('output').innerHTML = '';
    countdown(num);
});
