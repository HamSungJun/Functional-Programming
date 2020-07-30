/*
 * 클로저 함수 : 특정 함수 내에 존재하는 Inner Function
 *
 * 클로저가 접근 할 수 있는 Scope
 * 1. 클로저 함수 내부에서 선언된 변수
 * 2. 전역 변수
 * 3. 클로저를 내포한 함수의 변수에 접근 
 */

 // Scope.1
function outer(){
  function inner(){
    let a = 5
    console.log(a)
  }
  inner()
}
outer()

// Scope.2
const GLOBAL_VAR = '123'
function outer_(){
  function inner_(){
    console.log(GLOBAL_VAR)
  }
  inner_()
}
outer_()

// Scope.3
function outer__(){
  const outer__string = 'var in outer__'
  function inner__(){
    console.log(outer__string)
  }
  inner__()
}
outer__()

// 클로저 단골 예시
function makeAdder(diff){
  return (a) => {return a + diff}
}

const plusOne = makeAdder(1)
const plusFive = makeAdder(5)

console.log(plusOne(2))
console.log(plusFive(5))

const logAcc = (value) => (fn1) => (fn2) => {
  console.log(value)
  fn1(value + 1)
  fn2(value + 2)
}

logAcc(3)(console.log)(console.log)

import once from './lib/once.js'
import memoize from './lib/momoize.js'
const logOnce = once(()=>{console.log('한번만 실행')})
logOnce() // 한번만 실행
logOnce() // no-op

function factorial(n){
  if(n === 1 || n === 0) return 1
  return n * factorial(n - 1)
}

const memoizedFactorial = memoize(factorial)
console.log(memoizedFactorial(10))