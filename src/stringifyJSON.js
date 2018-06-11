// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //check for primitive types
  if (typeof obj === 'number') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    //declare a string
    let str = '[';
    //iterate through array
    for (let i = 0; i < obj.length; i++) {
      //forEach value
      str += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        str += ',';
      }
    }
    str += ']';
    return str;  
  } else if (obj.constructor === Object) {
    //grab object keys
    let keys = Object.keys(obj);
    let str = '';
    
    //check for empty object
    if (keys.length === 0) {
      return '{}';
    }

    //iterate through Object
    for (let key of keys) {
      if (obj[key] !== undefined && !(obj[key] instanceof Function)) {
        str += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    
    return '{' + str.slice(0, str.length - 1) + '}';    
  }
};
