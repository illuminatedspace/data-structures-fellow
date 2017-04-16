//ES5 version
function LinkedList () {
  this.head = null
  this.tail = null
}

LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value)
  if (this.tail) {
    this.tail.next = newNode
    newNode.previous = this.tail
  }
  else {
    this.head = newNode
  }
  this.tail = newNode
}

LinkedList.prototype.addToHead = function (value) {
  newNode = new Node(value)
  if (this.head) {
    this.head.previous = newNode
    newNode.next = this.head
  }
  else {
    this.tail = newNode
  }
  this.head = newNode
}

LinkedList.prototype.removeHead = function () {
  if (this.head) {
    const current = this.head
    if (this.head.next) {
      this.head = this.head.next
      this.head.previous = null
    } else {
      this.head = null
      this.tail = null
    }
    return current.value
  }
  else {
    return null
  }
}

LinkedList.prototype.removeTail = function () {
  if (this.tail) {
    const current = this.tail
    if (this.tail.previous) {
      this.tail = this.tail.previous
    }
    this.tail.next = null
    return current.value
  }
  else {
    this.head = null
    this.tail = null
    return null
  }
}

LinkedList.prototype.search = function (query) {
  let node = this.head
  let check = function () {
    return node.value === query
  }
  if (typeof query === 'function') {
    check = function () {
      return query(node.value)
    }
  }
  while (node) {
    if (check()) return node.value
    node = node.next
  }
  return null
}

function Node (value) {
  this.value = value
  this.next = null
  this.previous = null
  return this
}
