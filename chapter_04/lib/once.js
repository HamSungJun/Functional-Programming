function once(fn){
  let isDone = false
  return () => {
    if(!isDone){
      isDone = true
      fn.apply(this, arguments)
    }
    return
  }
}

export default once