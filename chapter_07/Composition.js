import compose from './lib/compose.js'
import pipe from './lib/pipe.js'

function sum(array){
  return array.reduce((acc,curr) => (acc += curr),0)
}

function map(array, fn){
  const newArray = new Array(array.length)
  for(let i = 0; i < array.length; i++){
    newArray[i] = fn(array[i])
  }
  return newArray
}

const sumAfterMap = compose(sum, map.bind(null, [1,2,3,4,5], (x) => (x+1)))
console.log(sumAfterMap())
