const estudantes = [
    {"nome": "João", "nota1": 8.5, "nota2": 7.2},
    {"nome": "Maria", "nota1": 6.8, "nota2": 9.3},
    {"nome": "Pedro", "nota1": 7.5, "nota2": 6.9},
    {"nome": "Ana", "nota1": 9.2, "nota2": 8.7},
    {"nome": "Carlos", "nota1": 6.4, "nota2": 7.8}
]

function media() {
    estudantes.map(aluno => {
        return alert(`o aluno ${aluno.nome} teve a media de ${aluno.nota1 + aluno.nota2 / 2} pontos`)
    })
}

media(estudantes)