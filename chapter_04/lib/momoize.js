function memoize(fn){
  const cache = {}
  return (param) => {
    if(!cache[param]) {
      cache[param] = fn(param)
    }
    return cache[param]
  }
}

export default memoize