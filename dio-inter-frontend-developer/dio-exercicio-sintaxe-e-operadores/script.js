function realizarOperacao(n1, n2){

    if(!n1 || !n2 || Number.isNaN(n1) || Number.isNaN(n2) || typeof(n1) != 'number' || typeof(n2) != 'number'){
        return "Digite números válidos." 
    }

    var igual = n1 === n2 ? "" : "não ";
    var soma = n1 + n2;
    var compara10 = soma > 10 ? "maior" : "menor";
    var compara20 = soma < 20 ? "menor" : "maior";    

    var resultado =  `Os números ${n1} e ${n2} ${igual}são iguais. Sua soma é ${soma}, que é ${compara10} que 10 e ${compara20} que 20.`; 
    
    return resultado;
}

console.log(realizarOperacao(2, 3));
console.log(realizarOperacao(5, 10));
console.log(realizarOperacao(4, 4));
console.log(realizarOperacao());
console.log(realizarOperacao('a','r'));
