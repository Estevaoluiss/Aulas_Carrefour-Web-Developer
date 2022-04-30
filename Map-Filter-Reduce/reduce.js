// somando todos os numeros do arr
/*
function somaNumeros(arr) {
  return arr.reduce(function (prev, current) {
    console.log({ prev })
    console.log({ current })
    return prev + current
  }, 0)
}
const arr = [1, 2]

console.log(somaNumeros(arr))

*/

const list = [
  {
    // current pega todo os itens por isso tem que usar o current.preco
    name: 'sabao em po',
    preco: 30
  },
  {
    name: 'cereal',
    preco: 12
  },
  {
    name: 'toalha',
    preco: 30
  }
]

const saldoDisponivel = 100

function calcSaldo(saldoDisponivel, list) {
  return list.reduce(function (prev, current, index) {
    // prev é o acumulador
    console.log('rodada', index + 1)
    console.log({ prev })
    console.log({ current })
    return prev - current.preco // pega o valor de preco da lista
  }, saldoDisponivel)
}
console.log(calcSaldo(saldoDisponivel, list))
