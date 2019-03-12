
var numero_mes = 12;
var resultado = " ";

function nmes(numero_mes) {

    switch (numero_mes) {
        case 1: this.resultado = "Janeiro";
            break;
        case 2: this.resultado = "Fevereiro";
            break;
        case 3: this.resultado = "Março";
            break;
        case 4: this.resultado = "Abril";
            break;
        case 5: this.resultado = "Maio";
            break;
        case 6: this.resultado = "Junho";
            break;
        case 7: this.resultado = "Julho";
            break;
        case 8: this.resultado = "Agosto";
            break;
        case 9: this.resultado = "Setembro";
            break;
        case 10: this.resultado = "Outubro"
            break;
        case 11: this.resultado = "Novembro";
            break;
        case 12: this.resultado = "Dezembro";
            break;
        default: this.resultado = "O mes não existe";
            break;
    }
    return this.resultado;

}
console.log(nmes(numero_mes));