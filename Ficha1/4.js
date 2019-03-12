
function operacoes(val1, val2, operador) {

    switch (operador){
        case "+": cep = val1 + val2;break;
        case "-": cep = val1 - val2;break;
        case "*": cep = val1 * val2;break;
        case "/": cep = val1 / val2;break;
        case "^": cep = Math.pow(val1 , val2);break;
        default: return "erro";
    }
   return cep

}

console.log(operacoes(10, 10, "-"));