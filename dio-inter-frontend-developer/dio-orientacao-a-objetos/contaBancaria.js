class ContaBancaria{

    constructor(agencia, numero, tipo){
        this._agencia = agencia;
        this._numero = numero;
        this._tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    depositar(valor) {
        this._saldo += valor;
        
        return this._saldo;
    }

    sacar(valor){
        if(this._saldo < valor){
            return('Operação não realizada. Saldo insuficiente.')
        }

        this._saldo -= valor;
       
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this._tipo = 'ContaCorrente';
        this._cartaocredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaocredito;
    }

    set cartaoCredito(possui){
        this._cartaocredito = possui;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this._tipo = 'ContaPoupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this._tipo = 'ContaUniversitaria';
    }

    sacar(valor){

        return valor < 500 ? super.sacar(valor) : 'Não é possível sacar valores maiores ou iguais a R$500.'
    }
}

const contaCorr = new ContaCorrente('0310', '521999000', true);
const contaUni = new ContaUniversitaria('1200', '522200111');

console.log(contaCorr);
console.log(contaCorr.sacar(100));
console.log(contaCorr.depositar(800));
console.log(contaCorr.sacar(100));

console.log(contaUni);
console.log(contaUni.sacar(100));
console.log(contaUni.sacar(1000));