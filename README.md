# Situa-o-problema-checkout-de-um-e-comerce-em-colapso
// ===== SEÇÃO 1: CARRINHO (laço de repetição) ======

function calcularSubtotal(itens) {
    //TODO
}

function contarItens(itens) {
    //TODO
}

// ===== SEÇAÕ 2: CUPOM(estruturas condicionais) =====

function aplicarCupom(subtotal, codigo) {
    //TODO
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