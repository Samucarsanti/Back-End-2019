function fatorial(number){
    resultado=number;
    for (i=number-1; i>=1; i--){

        resultado*=i;
    }
    return resultado

}
console.log(fatorial(3));