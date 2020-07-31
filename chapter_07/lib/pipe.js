function pipe(...fn){
  return (param) => {
    return fn.reduce((acc, fn) => (fn(acc)),param)
  }
}

export default pipe