const alunos = [
    {
        nome: 'Jose',
        nota: 8,
        turma: 'A'
    },
    {
        nome: 'Maria',
        nota: 10,
        turma: 'B'
    },
    {
        nome: 'Carlos',
        nota: 5,
        turma: 'A'
    }
];

function retornaAlunosAprovados(alunos, mediaFinal){
    
    let alunosAprovados = []

    for(const {nome, nota} of alunos){
        if(nota >= mediaFinal){
            alunosAprovados.push({nome}); //Exibe nome
            //alunosAprovados.push({nome, nota}); //Exibe nome e nota
        }
    }

    return alunosAprovados;
}

console.log(retornaAlunosAprovados(alunos, 6));
