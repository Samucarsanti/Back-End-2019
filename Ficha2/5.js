var h_t = 0;
function hora_de_trabalho(h_e, h_s){
    if (h_e < 8 || h_s > 18){
        return "Horas inválidas"
    }
    h_t = h_s - h_e;
    return h_t
}
console.log(hora_de_trabalho(2, 18))