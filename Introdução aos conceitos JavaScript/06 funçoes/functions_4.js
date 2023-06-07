/* function constructor 

    expressao new
    criar um novo objeto
    this keyword
*/

function Person(params) {
    // usa a primeira letra do nome da funcao em maiusculo
    // aqui dentro faz o molde do objeto
    // o this sempre vai referenciar o novo objeto que esta sendo criado (allison e thome) e o objeto sempre vai referenciar o this dentro da funcao
    this.name = params
    this.walk = function(){
        return this.name + ' está andando'
    }
}
const allison = new Person("allison") // criou um objeto... instanciar um novo objeto
const thome = new Person("thomé") // criou outro objeto

console.log(allison);
console.log(allison.name);
console.log(allison.walk());

console.log(thome);

let myArray = ['a', 'b', 'c']
let myArray1 = new Array('a', 'b', 'c', 'd') // cada argumento virara um elemento no meu array

