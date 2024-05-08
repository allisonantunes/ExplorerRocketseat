const estudantes = [
    {"nome": "João", "nota1": 8, "nota2": 8},
    {"nome": "Maria", "nota1": 6.8, "nota2": 6.9},
    {"nome": "Pedro", "nota1": 7.5, "nota2": 6.9},
    {"nome": "Ana", "nota1": 9.2, "nota2": 8.7},
    {"nome": "Carlos", "nota1": 0, "nota2": 0}
]

function media() {
    estudantes.map(aluno => {
        const media = (aluno.nota1 + aluno.nota2 ) / 2
        console.log(aluno.nota1);
        if(media >= 7) {
            return alert(`o aluno ${aluno.nome} teve a media de ${media} pontos e foi aprovado no concurso`)
        }
        if(media <= 0) {
            return alert(`o aluno ${aluno.nome} zero a nota e foi reprovado no concurso`)
        }
        else {
            return alert(`o aluno ${aluno.nome} teve a media de ${media} pontos e nao foi aprovado no concurso :/`)

        }
    })
}

media(estudantes)