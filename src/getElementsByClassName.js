// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  //document.body, element.childNodes, and element.classList
  //get document body
  let $body = document.body;
  //result variable holding all matching nodes
  let result = [];
  
  //helper function takes node, searches through child nodes, push
  //matching nodes to results array
  let classSearch = function(nodeList) {
    nodeList.forEach(function(node) {
      if (node.classList !== undefined && matchingClass(node.classList)) {
        result.push(node);
      }

      if (node.childNodes.length > 0) {
        classSearch(node.childNodes);
      }
    });
  };
  
  //returns true if node has target class
  let matchingClass = function(classList) {
    let match = false;
    classList.forEach(function(val) {
      if (val === className) {
        match = true;
      }
    });
    return match;
  };
  
  let children = $body.childNodes;
  
  if (matchingClass($body.classList)) {
    result.push($body);
  }

  classSearch(children);
  
  return result;
};
