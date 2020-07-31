import {forEach, map, filter, flat, reduce, zip} from './lib/ArrayUtils.js'

const myArray = [1,2,3,[6,[7,8,[10,11,12]]],[1,2,3],5]
const myArray2 = [1,2,3,4,5,6,7,8,9,10]
const myArray3 = [11,12,13,14,15,16,17,18,19,20]
console.log(map(myArray, (x) => (x * x)))
console.log(filter(myArray, (x) => (x % 2 !== 0)))
console.log(flat(myArray))
console.log(reduce(flat(myArray2), (acc,curr) => (acc * curr), 1))
console.log(zip(myArray2, myArray3, (x1, x2) => (x1 * x2)))