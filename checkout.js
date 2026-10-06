// ===== SEÇÃO 1: CARRINHO (laço de repetição) ======

function calcularSubtotal(itens) {
    //TODO
}

function contarItens(itens) {
    //TODO
}

// ===== SEÇAÕ 2: CUPOM(estruturas condicionais) =====

function aplicarCupom(subtotal, codigo) {
     let desconto = 0;

    // if else
    if (codigo === 'DESC10') {
        desconto = subtotal * 0.10;
    } else if (codigo === 'DESC20') {
        if (subtotal >= 200) {
            desconto = subtotal * 0.20;
        }
    } else if (codigo === 'FRETEGRATIS') {
        desconto = 15;
    } else {
        desconto = 0;
    }

    // Calcular novo valor
    let novoValor = subtotal - desconto;

    // pra não ser negativo
    if (novoValor < 0) {
        novoValor = 0;
    }

    return novoValor;
}

//===== SESÃO 3: CHECKOUT(integração) =====

function finalizarCompra(itens, codigoCupom) {
    return { subtotal: 0, desconto: 0, total: 0}; //TODO: interagir carrinho e cupom
}

//===== SEÇÃO 4: TESTES =====

const itens = [
    {nome: "camiseta", preco: 50, quantidade: 2},
    {nome: "Tênis", preco: 150, quantidade: 1}
];
console.log(finalizarCompra(itens, "DESC10"));