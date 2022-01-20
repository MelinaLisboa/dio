// Atividade 1
// Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

// Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

function verificarPalindromo(entrada){

    if(!entrada) return;

    let novaEntrada = entrada.split(" ").join("").toLowerCase();

    let entradaInvertida = [].map.call(novaEntrada, function(x){
        return x;
    }).reverse().join('');
    
    if(novaEntrada === entradaInvertida){
        console.log(`A palavra ou frase '${entrada}' é um palíndromo.`);
    }
    else{
        console.log(`A palavra ou frase '${entrada}' não é um palíndromo.`);
    }

}

function verificarPalindromo2(entrada){

    let novaEntrada = entrada.replace(/\s/g, '').toLowerCase().split('');
    let entradaInvertida = []

    for(i = novaEntrada.length -1; i >= 0; i--){
        entradaInvertida.push(novaEntrada[i]);
    }

    novaEntrada = novaEntrada.join("");
    entradaInvertida = entradaInvertida.join("");
    
    if(novaEntrada === entradaInvertida){
        console.log(`A palavra ou frase '${entrada}' é um palíndromo.`);
    }
    else{
        console.log(`A palavra ou frase '${entrada}' não é um palíndromo.`);
    }

}

console.log("\n#### Maneira 1 ####: \n");
verificarPalindromo("raiar");
verificarPalindromo("ama");
verificarPalindromo("ovo");
verificarPalindromo("radar");
verificarPalindromo("Amor a Roma");
verificarPalindromo("O lobo ama o bolo");
verificarPalindromo("faca");
verificarPalindromo("Olá mundo!");

console.log("\n#### Maneira 2 ####: \n");

verificarPalindromo2("raiar");
verificarPalindromo2("ama");
verificarPalindromo2("ovo");
verificarPalindromo2("radar");
verificarPalindromo2("Amor a Roma");
verificarPalindromo2("O lobo ama o bolo");
verificarPalindromo2("faca");
verificarPalindromo2("Olá mundo!");