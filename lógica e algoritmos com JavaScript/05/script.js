/* 

Capture 10 itens para compor a lista de um supermercado.

após capturar os 10 itens, imprima-os, separando por vírgula.

*/

let itens = []

for(let item = 0; item < 10; item++) {
    let product = prompt(`digite o ${item + 1} item: `)
    itens[item] = product
}

alert(itens)