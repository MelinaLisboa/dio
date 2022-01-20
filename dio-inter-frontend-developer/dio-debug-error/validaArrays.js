function validaArray(arr, tamanho){
    
    try{
        if(!arr || !tamanho){
            throw new ReferenceError('Envie parâmetros de entrada válidos.');
        }
        if(typeof arr !== 'object'){
            throw new TypeError('Envie um tipo de array válido.');
        }
        if(typeof tamanho !== 'number'){
            throw new TypeError('Envie um número válido.');
        }
        if(arr.length !== tamanho){
            throw new RangeError('Envie um número que corresponda ao tamanho do array.');
        }
        return arr;
    }catch(e){
        if(e instanceof ReferenceError || e instanceof TypeError || e instanceof RangeError){
            console.log(`${e.name}: ${e.message}`);
        }else{
            console.log(`Erro desconhecido: ${e.stack}`);
        }
    }


}


console.log(validaArray([1,2,3], 0));
console.log(validaArray(1, 1));
console.log(validaArray([1,2,3], 'a'));
console.log(validaArray([1,2,3], 2));
console.log(validaArray([1,2,3], 3));