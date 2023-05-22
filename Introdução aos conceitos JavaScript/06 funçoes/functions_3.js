let subject = 'video'

function createThink(subject) {
    subject = 'study' // só existe um novo subject se passar ele no parametro
    return subject
}

console.log(createThink(subject));
console.log(subject);



let objeto = 'video'

function createThinks() {
    objeto = 'study' // se nao tirar no parametro nao cria um novo e reescreve o objeto
    return objeto
}

console.log(createThinks());
console.log(objeto);


sayMyName()

function sayMyName(){
    console.log('allison');
}

function myName(nome){
    console.log('antes da callback');
    nome()
    console.log('depois da callback');
}
myName(
    () => {
        console.log('estou numa callback');
    }
)