var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

//write methods as well
LinkedList.prototype.addToTail = function (val) {
  var newNode = this.makeNode(val);
  if (!this.head && !this.tail) {
    this.head = newNode;
    this.tail = newNode;
  }
  this.tail = newNode;
  this.tail.next = newNode;
};
LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    return null;
  }
  var old;
  if (this.length === 1) {
    old = this.head.value;
    this.tail = null;
    this.head = null;
  } else {
    old = this.head.value;
    this.head = this.head.next;
  }

  return old;
};
LinkedList.prototype.contains = function (val) {
  var currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value === val) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function (val) {
  var node = {};
  node.value = val;
  node.tail = null;
  return node;
};
