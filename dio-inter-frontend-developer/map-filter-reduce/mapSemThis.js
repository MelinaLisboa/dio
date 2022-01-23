function multiplicarNumeros(arr){
    const newArr = arr.map(minhaFuncao);
    
    return newArr;
}

function minhaFuncao(num) {
    return num * 10;
}

console.log(multiplicarNumeros([1,2,3,4,5]));