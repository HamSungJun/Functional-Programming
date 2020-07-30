import forEachObject from './lib/forEachObject.js'
import forEach from './lib/forEach.js'
import unless from './lib/unless.js'
import isEven from './lib/isEven.js'
import times from './lib/times.js'
import log from './lib/log.js'
import isNumber from './lib/isNumber.js'
import every from './lib/every.js'
import sortBy from './lib/sortBy.js'

const myArray = [1, 2, 3, 4, 5, 6, 7]
const array = [2,8,5,6,7,4]
const people = [{
  age: 13,
  name: 'James'
},
{
  age: 40,
  name: 'Kevin'
},{
  age: 25,
  name: 'Cayde'
},{
  age: 55,
  name: 'Tommy'
}]
const myObject = { a: 1, b: 2, c: 3 }

forEachObject(myObject, (k, v) => {log(k, v)})
forEach(
  myArray,
  (el) => { 
    unless(
      isEven(el),
      log.bind(null, el)
    )
  }
)

times(
  300,
  (el) => {
    unless(
      isEven(el),
      log.bind(null, el)
    )
  }
)

log(
  every(
    myArray,
    isNumber
  )
)

people.sort(sortBy('age'))
log(people)