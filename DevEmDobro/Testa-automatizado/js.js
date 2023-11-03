const calcularPedido = (pedido) => {
    const valorProduto = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedido, pedidoAtual) => {
        totalPedido + pedidoAtual.valor, 0
    })
    const entrega = pedido.itens.filter(item => item.entrega)
    
    if(valorProduto > 500) {
        return valorProduto
    } else {
        return valorProduto + entrega[0].value
    }
}

module.exports =calcularPedido