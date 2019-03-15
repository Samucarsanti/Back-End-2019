function triangulo(altura) {
    if (altura <= 0) {
        return "Dados inválidos"
    }
    else {

        var i = 1;
        var alt = "*".repeat(i);

        while (i <= altura){

            console.log(alt)
            i++
            alt = "*".repeat(i);
        }
    }
    return "Processo feito"
}
console.log(triangulo(8))