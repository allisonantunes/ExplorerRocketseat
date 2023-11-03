const calcularPedido = require('./js')

it('teste compras sem frete', () => {
    const meuPedido = {
        itens: [
            {nome: 'mouse', valor: 1000},
            {nome: 'entrega', valor: 15, entrega: true}
        ]
    }
    const resultado = calcularPedido(meuPedido)
    expect(resultado).toBe(1000)
})

it('teste compras com frete', () => {
    const meuPedido = {
        itens: [
            {nome: 'mouse', valor: 100},
            {nome: 'entrega', valor: 15, entrega: true}
        ]
    }
    const resultado = calcularPedido(meuPedido)
    expect(resultado).toBe(115)
})