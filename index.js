// let rootNode = {data: 5, left: null, right: null}
// let firstNewNode = {data: 3, left: null, right: null}
// let secondNewNode = {data: 7, left: null, right: null}

// prints out the data in the node from lowest to highest
// inOrder of everything to left-> the center node-> inOrder of everything to right
function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }
  console.log(currentNode.data);

  if (currentNode.right) {
    inOrder(currentNode.right);
  }
}

// add the presented node if the data does not already exist
// add new elements on a multilevel tree
// should return true if the and not modify the tree if the element exists
// should add new elements on a multilevel tree
function findOrAdd(currentNode, newNode) {
  if (currentNode.data == newNode.data) {
    return true;
  } else if (newNode.data < currentNode.data) {
    if (currentNode.left) {
      return findOrAdd(currentNode.left, newNode);
    } else {
      return currentNode.left = newNode;
    }
  } else if (newNode.data > currentNode.data) {
    if (currentNode.right) {
      return findOrAdd(currentNode.right, newNode);
    } else {
      return currentNode.right = newNode;
    }
  }
}

// return the node w/ maximum element in a tree
// let node = {data: 5, left:
//   {data: 3, left: null, right: null},
//     right: {data: 7, left: null,
//     right: {data: 9, left: null, right: null}
//   }}
function max(currentNode) {
  if (currentNode.right) {
    return max(currentNode.right);
  } else {
    return currentNode;
  }
}

// return node w/ minimum element in a tree
function min(currentNode) {
  if (currentNode.left) {
    return min(currentNode.left);
  } else {
    return currentNode;
  }
}

let rootNode = { data: 5, left: null, right: null };
let firstNewNode = { data: 3, left: null, right: null };
let secondNewNode = { data: 7, left: null, right: null };
let thirdNewNode = { data: 9, left: null, right: null };
findOrAdd(rootNode, firstNewNode)
findOrAdd(rootNode, secondNewNode)
findOrAdd(rootNode, thirdNewNode)