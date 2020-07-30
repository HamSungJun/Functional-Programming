function forEachObject(obj, fn){
  for(const key in obj){
    if(obj.hasOwnProperty(key)){
      fn(key, obj[key])
    }
  }
}

export default forEachObject