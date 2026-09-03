console.warn("BÁSICO DE UM ARRAY")
const fruits = ["Maçã", "Banana", "Laranja", "Uva", "Limão", "Abacaxi"]
console.log(fruits)

console.warn("ACESSANDO ELEMENTO DE UM ARRAY PELO ÍNDICE(INDEX)")
const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Limão", "Abacaxi"]
console.log(frutas[3])

console.warn("ARRAY METHODS")
console.info("array.unshift(): O unshift adiciona um item/elemento no INICIO do array")
frutas.unshift("Morango")
console.log(frutas)

console.info("array.shift(): O shift remove um item/elemento do INICIO do array")
frutas.shift()
console.log(frutas)

console.info("array.push(): O push adiciona um item/elemento no FINAL do array")
frutas.push("Abacate")
console.log(frutas)

console.info("array.pop(): O pop remove um item/elemento do FINAL do array")
frutas.pop()
console.log(frutas)
