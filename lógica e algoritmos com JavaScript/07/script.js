/* 



*/
let itens = [];
let opcao = '';

while(opcao != 3){

opcao = Number(prompt(`
Olá usuario! Digite a opção desejada

    1. cadastrar um item na lista.
    2. mostrar itens cadastrados.
    3. sair do programa.
`)
)

switch (opcao) {
    case 1:
        let item = prompt('digite um item')
        itens.push(item)
        break;
    case 2:

        if(itens.length == 0){
            alert('nao existem itens cadastrado')
        }else{
            alert(itens)
        }
        
    break;
    case 3:
        alert('tchau')
    break;

    default:
        alert('Erro. tente novamente')
        break;
}
}

