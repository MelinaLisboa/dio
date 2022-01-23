function calcularSaldo(arr, saldoDisponivel) {
    console.log(`Lista de entrada [${arr}]. Saldo disponível: ${saldoDisponivel}`);
    const retorno = arr.reduce(minhaFuncao, saldoDisponivel);
    console.log(`Saldo final após substração: ${retorno}`);
}

function minhaFuncao(total, num) {
    return total - num;
}

calcularSaldo([102, 42, 50, 3.5], 1380);