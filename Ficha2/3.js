var vogais = ["a", "e", "i", "o", "u"]
var totais = 0;
function numero_vogais(frase){
    for (i=0; i<frase.length;i++){
        for (j=0; j<frase.length;j++){

            if (frase[i] == vogais[j]){
                totais++
            }

        }
    }
    return totais;
}
console.log(numero_vogais("ola a todos"))