function somarNumeros(arr){
    
    console.log(`Lista a ser somada [${arr}]`);
    const retorno = arr.reduce(minhaFuncao)
    console.log(`Resultado soma: ${retorno}`);
}

function minhaFuncao(total, num) {
    return total + num;
}

somarNumeros([1,2,3,4,5,6,7,8,9]);