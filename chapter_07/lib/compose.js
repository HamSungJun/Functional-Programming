function compose(...fn){
  return (param) => {
    return fn.reverse().reduce((acc, fn) => (fn(acc)), param)
  }
}

export default compose