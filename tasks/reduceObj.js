const hash = arr1.reduce((obj, key) => {
  obj[key] = obj[key] ? obj[key]++ : 1;
        
  return obj;
}, {});