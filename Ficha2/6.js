function retangulo(altura, largura){
    if (altura <=0 || largura <=0){
        return "Dados inválidos"
    }
    else {

        var lg = "*".repeat(largura);
        var i=1;


        while (i<=altura){
            console.log(lg);
            i++
        }

    }
    return "Processo feito"
}
console.log(retangulo(6, 6))