var contador = 0;
var frase = "";
var fraselower = ""
var letra = "";
function letras_abc(fra, let) {

    fraselower = fra.toLowerCase();

    for (i = 0; i < fra.length; i++) {
        frase += fra[i]
        letra = let
        if (fraselower[i] == let) {

            contador++

        }

    }
    return [contador, letra,  frase];
}
console.log(letras_abc("OlA PeSsOaL", "a"));