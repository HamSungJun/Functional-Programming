function sortBy(key){
  return function(k1, k2){
    return (k1[key] < k2[key]) 
      ? -1
      : (k1[key] > k2[key])
        ? 1
        : 0
  }
}

export default sortBy