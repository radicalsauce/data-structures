var makeBTree = function(values){
  var tree = Object.create(BTree);
  tree.root = makeBTreeNode.call(tree, values);
  return tree;
};

var BTree ={
  insert: function(values){
    this.root._insert(values);
  }
};

var makeBTreeNode = function(values){
  var node = Object.create(BTreeNode);
  node.values = [];
  node.children = [];
  node.parent = null;
  node.containingTree = this;
  for(var i = 0; i < values.length; i++){
    node._insert(values[i]);
  }
  return node;
};

BTreeNode = {
  _insert: function(value) {

    var node = this._search(value);
    if(node === true){
      return false;
    }

    node.values.push(value);
    node.values = node.values.sort();

    if(node.values.length === 5){

      var tail = node.values.splice(3, 2);
      var median = node.values.pop();

      var parent = makeBTreeNode(median);
      parent.children.push(node);
      node.parent = parent;

      var newNode = makeBTreeNode(tail);
      parent.children.push(newNode);
      newNode.parent = parent;

      node.containingTree.root = parent;

    }
  },

  _search: function(target){
    if(this.children.length === 0){
      return this;
    }

    _.each(this.values, function(value){
      if(value === target){
        return true;
      }
    });

    _.each(this.values, function(value, index){
      if (target < value && this.children[index]) {
        return this.children[index]._search(target);
      }
    });

    return this.children[4]._search(target);

  },
  _contains: function(value) {

  },

  _depthFirstLog : function(iterator) {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
