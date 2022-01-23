function filtrarPares(arr){
    console.log(`Array orginal: [${arr}]`);
    const newArr = arr.filter(minhaFuncao);
    console.log(`Array números pares:[${newArr}]`);
}

function minhaFuncao(num) {
    return num % 2 === 0;
}


filtrarPares([2,22,15,35,158,100,47]);