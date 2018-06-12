// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //object handler
  if (json[0] === '{') {
    let newObj = {};
    let inString = false;
    let inKey = true;
    let str = '';
    for (let i = 0; i < json.length; i++) {
      //starts string sequence
      if (json[i] === '"' && !inString) {
        inString = true;
      //ends string sequence
      } if (json[i] === '"' && inString) {
        inString = false;
        newObj[str] = 
        str = '';
      } if (inString) {
        str += json[i];
      } if (json[i] === ':') {
        inKey = false;
      }
    }
  // array handler
  } else if (json[0] === '[') {
    let newArr = [];
    if (json === '[]') {
      return newArr;
    }
  }
};
