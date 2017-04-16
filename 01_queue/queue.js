//ES5 method
function Queue() {
  this.counter = 0
  this.head = 0
  this.tail = null
  this.items = []
}

Queue.prototype.enqueue = function (value) {
  this.counter++
  const next = this.tail === null ? 0 : this.tail + 1
  this.items[next] = value
  this.tail = next
}

Queue.prototype.dequeue = function () {
  const dequeued = this.items[this.head] || undefined
  if (this.counter > 0) {
    this.counter--
    this.head++
  }
  return dequeued
}

Queue.prototype.size = function () {
  return this.counter
}
