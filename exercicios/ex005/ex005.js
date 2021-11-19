let n1 = 5.50
let n2 = 7.5250
let n3 = 2.5

console.log(n2.toFixed(2))
console.log(`R$ ${n3.toFixed(2).replace('.',',')}`)
console.log(n1.toLocaleString('pt-Br', {style:'currency' , currency: 'BRL'}))
