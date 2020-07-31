export function forEach(array, fn){
  for(let i = 0; i < array.length; i++){
    fn(array[i])
  }
}

export function map(array, fn){
  let newArray = new Array(array.length)
  for(let i = 0; i < array.length; i++){
    newArray[i] = fn(array[i]) 
  }
  return newArray
}

export function filter(array, fn){
  let newArray = []
  for(let i = 0; i < array.length; i++){
    if(fn(array[i])){
      newArray.push(array[i])
    }
  }
  return newArray
}

export function flat(array){
  const stack = [...array]
  const newArray = []
  while(stack.length){
    const next = stack.pop()
    Array.isArray(next) 
      ? stack.push(...next) 
      : newArray.unshift(next)
  }
  return newArray
}

export function reduce(array, fn, initial){
  const hasInitial = ![null,undefined].includes(initial)
  let acc = (hasInitial ? initial : array[0])
  for(let i = (hasInitial ? 1 : 0); i < array.length; i++){
    acc = fn(acc, array[i])
  }
  return acc
}

export function zip(l1, l2, fn){
  const minLen = Math.min(l1.length, l2.length)
  const newArray = new Array(minLen)
  for(let i = 0; i < minLen; i++){
    newArray[i] = fn(l1[i], l2[i])
  }
  return newArray
}



