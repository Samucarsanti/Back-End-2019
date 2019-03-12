sequencia_de_numeros = [1,2,3,4,5,6,7,8,9,10];

function Maior(array){
    n_maior=array[0];
    n_menor=array[0];
    media=0;
    for(i=0;i<array.length;i++){
        if (n_maior<array[i]){
            n_maior=array[i];
        }

        if (n_menor>array[i]){
            n_menor=array[i];
        }

        media += i;
    }
    return [n_maior, n_menor, media/2]
}
console.log(Maior(sequencia_de_numeros))
