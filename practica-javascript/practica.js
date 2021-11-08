let numeros = [9,7,6,4,3,2,5,7,1]

let ordenado = numeros.sort(function(a,b){
  return a - b
})

let reverso = ordenado.reverse()

let secondLargestNumber = reverso[1]

console.log(`El segundo número mayor es el número ${secondLargestNumber}`);