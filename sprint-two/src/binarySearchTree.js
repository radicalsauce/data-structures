var makeBinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree);
  tree.left = undefined;
  tree.right = undefined;
  tree.value = value;
  return tree;
};

BinarySearchTree = {
  insert: function(value) {
    var dir = value < this.value ? 'left' : 'right';
    if (this[dir] === undefined) {
      this[dir] = makeBinarySearchTree(value);
    } else {
      this[dir].insert(value);
    }
  },
  contains: function(value) {
    if (value === this.value) {
      return true;
    }

    var dir = value < this.value ? 'left' : 'right';
    if (this[dir]) {
      return this[dir].contains(value);
    }

    return false;
  },
  depthFirstLog : function(iterator) {
    iterator(this.value);

    if(this.left){
      this.left.depthFirstLog(iterator);
    }

    if(this.right){
      this.right.depthFirstLog(iterator);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
