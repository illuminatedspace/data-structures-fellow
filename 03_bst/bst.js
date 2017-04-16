function BinarySearchTree (value) {
  this.value = value
}

BinarySearchTree.prototype.insert = function (insertValue) {
  if (insertValue < this.value) {
    if (!this.left) {
      const newValue = new BinarySearchTree(insertValue)
      this.left = newValue
    } else {this.left.insert(insertValue)}
  } else if (this.value < insertValue) {
    if (!this.right) {
      const newValue = new BinarySearchTree(insertValue)
      this.right = newValue
    } else {this.right.insert(insertValue)}
  }
}


BinarySearchTree.prototype.contains = function (searchValue) {
  if (this.value === searchValue) return true
  else if (searchValue < this.value) {
    if (this.left) return this.left.contains(searchValue)
    else return false
  }
  else if (this.value < searchValue) {
    if (this.right) return this.right.contains(searchValue)
    else return false
  }
}


BinarySearchTree.prototype.depthFirstForEach = function (order = 'in-order') {
  if (order === 'in-order') {

  }
}


BinarySearchTree.prototype.breadthFirstForEach = function () {

}


BinarySearchTree.prototype.size = function () {
  let sum = 0
  sum += 1
  if (this.left) sum += this.left.size()
  if (this.right) sum += this.right.size()
  return sum
}

