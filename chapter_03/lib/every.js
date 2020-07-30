function every(array, fn){
  let isSatisfied = true
  for(let i = 0; i < array.length; i++){
    isSatisfied = isSatisfied && fn(array[i])
    if(!isSatisfied) return isSatisfied
  }
  return isSatisfied
}

export default every