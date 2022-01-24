
function converterValores(arr, thisArg){
    console.log(`Valores em cm:[${arr}].\n`);
    const newArr = arr.map(minhaFuncao, thisArg);
    console.log(`Valores convertidos para metro: [${newArr}].\n`);
}

function minhaFuncao(num) {
    return num / this.fatorConversao;
}


const cmParaMetro = {
    fatorConversao: 100
};


converterValores([1,25,160,100,150], cmParaMetro);

