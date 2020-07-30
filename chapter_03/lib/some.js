function some(array, fn){
  let isSatisfied = false
  for(let i = 0; i < array.length ; i++){
    isSatisfied = isSatisfied || fn(array[i])
    if(isSatisfied) return isSatisfied
  }
  return isSatisfied
}