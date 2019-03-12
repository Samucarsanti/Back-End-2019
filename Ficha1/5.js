function multiplos() {
    var resultado=[];
    var i=5;
    while(i<20){
        resultado.push(i);
        i+=5
    }
    return resultado.toString();
} 

console.log(multiplos());