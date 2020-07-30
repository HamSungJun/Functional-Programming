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
  let pointer = 0;
  let newArray = new Array(absLen(array, 0, 0))
}

export function absLen(array, start, acc){
  for(start; start < array.length; start++){
    if(Array.isArray(array[start])){
      absLen(array[start], start+1, acc)
    } else {
      acc += 1
    }
  }
  return acc
}