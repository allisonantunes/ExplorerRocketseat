// manipulando array

let techs = ['html', 'css', 'js', 'mongo']
let techs1 = ['html', 'css', 'js', 'mongo']

// adcionar um item no fim
techs.push('nodeJs')
// adcionar no começo
techs.unshift('sql')
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do Array
console.log(techs.slice(1,3)); 

// o primeiro é a posicao inicial 0,1,2... 
// o segundo conta a partir do priemiro q eu escolher


// remover 1 ou mais itens em qualquer posicao do array
techs.splice(1, 1)

// encontrar a posicao de um elemento no array
let index = techs.indexOf('css') // qual o index do css.. index é a posicao que encotra ele.

// remover o index selecionado.
let index1 = techs1.indexOf('js') // seleciona
techs1.splice(index1, 1) // o elemento que quero remover e a quantidade

console.log(techs1);
