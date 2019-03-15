/* EXERCICIO 2 */
frase_inversa = "";

function frase (mensagem){
    for (i=mensagem.length-1;i>=0;i--){
        frase_inversa+= mensagem [i];
    }
    return frase_inversa;
}
console.log(frase("ananab im atsug el y anaibsel adnemert se ugiR"));
