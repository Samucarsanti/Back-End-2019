
var msg = "";
function fimc(peso, altura) {

    rimc = peso / (Math.pow(altura, 2));

    if (rimc <= 18.5) {
        msg = "Abaixo do peso";
    }
    else if (rimc >= 18.5 && rimc <= 25) {
        msg = "No peso normal";
    }
    else if (rimc >= 25 && rimc <= 30) {
        msg = "Acima do peso";
    }
    else if (rimc >= 30) {
        msg = "Estas obeso";
    }

    return [rimc, msg];

}
console.log(fimc(100, 1.95))

