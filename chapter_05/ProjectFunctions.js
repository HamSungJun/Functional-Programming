import {forEach, map, filter, absLen} from './lib/ArrayUtils.js'

const myArray = [1,2,3,[1,2,3],5]
console.log(map(myArray, (x) => (x * x)))
console.log(filter(myArray, (x) => (x % 2 !== 0)))
console.log(absLen(myArray, 0, 0))