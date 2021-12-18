const obj1 = { id: 1, name: 'Janis' }
const objFreeze = obj1
const obj2 = { id: 2, name: 'Doe', surname: 'Hellix' }
const arr4 = [
 { id: 1, name: 'Doeghg', surname: 'Hellixjhjh' },
 { id: 2, name: 'Doegfg', surname: 'Hellix' },
 { id: 3, name: 'Doeds', surname: 'Hellix' },
]
const arr1 = [
 [1, 2],
 ['5', '6'],
 [7, 8],
]

//assign() rewrites the previous keys and mutates source variables,
//but if you put {} in assign as a first parameter, no mutation of previous source
console.log(Object.assign({}, obj1, obj2))

console.log(Object.entries(obj1))

const arr2 = []
const arr3 = [1, 2, 3, 4]
//const mergedArray = new Set(...arr2, ...arr3)
//arr['a'] = 5

//console.log(arr)
//console.log(mergedArray)

//freeze make object unmutable, unchangable etc.
Object.freeze(objFreeze)
//console.log(objFreeze.id =3)

console.log(Object.fromEntries(arr1))

//Object.is() compares two values
console.log(Object.is({}, {}))
console.log(Object.is(obj1, objFreeze))

//codewars Sum of Digits / Digital Root

function digital_root(n = 135) {
 let result = 0

 String(n)
  .split('')
  .map((num) => (result += Number(num)))

 return result > 10 ? digital_root(result) : result

 //console.log((n-1)%9+1)
}

console.log(digital_root())

const number1 = 300

const number2 = 600

function sum(num1, num2) {
 return num1 + num2
}

//console.log(sum(number1, number2))
const result = {}

arr4.map(object=> result[Math.random()] = object)

console.table(result)
