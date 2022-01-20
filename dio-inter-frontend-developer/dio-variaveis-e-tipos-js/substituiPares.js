// Atividade 2
// Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

// Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]
// Output -> [1, 3, 0, 0, 0, 33, 23, 0]
// Input -> []
// Output -> -1

function substituirPares(arrayEntrada){
    
    if(!arrayEntrada) return -1;
    if(!arrayEntrada.length) return -1;

    arrayEntrada.forEach(substituirValor);

    return arrayEntrada;
}

function substituirValor(item, index, arr){
 arr[index] = item % 2 === 0 ? 0 : item;
}

console.log(substituirPares(null));
console.log(substituirPares(false));
console.log(substituirPares(undefined));
console.log(substituirPares([]));
console.log(substituirPares([1, 3, 4, 6, 80, 33, 23, 90]));