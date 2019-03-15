function caixa(lado) {
    if (lado <= 0 || lado == 1) {
        return "Dados inválidos"
    }
    else {
        var i = 1;
        var ladoae = "*".repeat(lado);
        var lados = "*";
        var espaços = " ".repeat(lado - 2);

        while (i <= lado) {

            if (i == 1 || i == lado) {
                console.log(ladoae)
            }
            else {
                console.log(lados, espaços, lados);
            }

            i++

        }

    }
    return "Processo feito"
}
function caixaa(tamano) {
    if (tamano <= 0 || tamano == 1) {
        return "Dados inválidos"
    }
    else {
        for (i = 1; i <= tamano; i++) {
            for (j = 1; j <= tamano; j++) {
                if (j == 1 || j == tamano || i == 1) {
                    console.log("* ")
                } else {
                    console.log("  ")
                }
            }
        }
    }
    return "It's done"
}
console.log(caixaa(10))