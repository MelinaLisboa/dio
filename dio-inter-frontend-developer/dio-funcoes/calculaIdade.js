const idadePessoa = {
    idadeCalculada: function calculaIdade(anos) {
            return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
    }
}

const pessoa1 = {
    nome: 'Melina',
    idade: 38
}

const pessoa2 = {
    nome: 'Gustavo',
    idade: 41
}

console.log(idadePessoa.idadeCalculada.call(pessoa1, 10)); //método recebe os parâmetros separadamente
console.log(idadePessoa.idadeCalculada.apply(pessoa2, [10]));///método recebe os parâmetros de um array