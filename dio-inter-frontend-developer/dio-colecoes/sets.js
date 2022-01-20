function retornaValoresUnicos(valores){
    const valoresUnicos =  new Set (valores);

    return [...valoresUnicos];
}


console.log(retornaValoresUnicos([30, 30, 40, 5, 223, 2049, 3034, 5]));