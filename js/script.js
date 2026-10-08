// ==========================================
// SIMULAÇÃO DE PRODUTIVIDADE
// ==========================================

var pedidos = prompt("Digite a quantidade de pedidos realizados:");

var quantidadePedidos = parseFloat(pedidos);

var dias = prompt("Digite a quantidade de dias analisados:");

var quantidadeDias = parseFloat(dias);

var media = quantidadePedidos / quantidadeDias;

alert("A média de pedidos por dia foi: " + media);