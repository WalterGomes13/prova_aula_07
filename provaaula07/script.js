
const valor = document.querySelector('#valor').value.trim();
const bom = document.querySelector('#Bom');
const regular = document.querySelector('#Regular');
const ruim = document.querySelector('#Ruim');
const calcular = document.querySelector('#ok');
const resultado = document.querySelector('#resultado');

const valorTotal = (c, d, callback) => {
  callback(c, d);
};

function escrever(c,d){
  return resultado.innerHTML = `Valor total a ser pago: ${parseFloat(c) + parseFloat(d)} (Gorjeta: ${(d).toFixed(2)} reais)`;
}