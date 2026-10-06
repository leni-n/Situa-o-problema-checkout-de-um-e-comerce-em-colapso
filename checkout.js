// ===== SEÇÃO 1: CARRINHO (laço de repetição) ======

function calcularSubtotal(itens) {
    let subtotal = 0;
    let i = 0;
    while (i < itens.length) {
        subtotal = subtotal + itens[i].preco * itens[i].quantidade;
        i++;
    }
    return subtotal;
}

function contarItens(itens) {
    let total = 0;
    let i = 0;
    while (i < itens.length) {
        total = total + itens[i].quantidade;
        i++;
    }
    return total;
}

// ===== SEÇÃO 2: CUPOM(estruturas condicionais) =====

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

//===== SEÇÃO 3: CHECKOUT(integração) =====

function finalizarCompra(itens, codigoCupom) {
    return { subtotal: 0, desconto: 0, total: 0}; //TODO: interagir carrinho e cupom
}

//===== SEÇÃO 4: TESTES =====

const itens = [
    {nome: "camiseta", preco: 50, quantidade: 2},
    {nome: "Tênis", preco: 150, quantidade: 1}
];
console.log(finalizarCompra(itens, "DESC10"));