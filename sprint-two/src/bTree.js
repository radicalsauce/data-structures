var makeBTree = function(values){
  var tree = Object.create(BTree);
  tree.values = [];
  tree.children = [];
  tree.parent = null;
  for(var i = 0; i < values.length; i++){
    tree.insert(values[i]);
  }
  return tree;
};

BTree = {
  insert: function(value) {

    var node = this.search(value);
    if(node === true){
      return false;
    }

    node.values.push(value);
    node.values = node.values.sort();

    if(node.values.length === 5){

      var tail = node.values.splice(3, 2);
      var median = node.values.pop();

      var parent = makeBTree(median);
      parent.children.push(node);
      node.parent = parent;

      var newNode = makeBTree(tail);
      parent.children.push(newNode);
      newNode.parent = parent;

    }
  },

  search: function(target){
    if(this.children.length === 0){
      return this;
    }

    _.each(this.values, function(value){
      if(value === target){
        return true;
      }
    });

    if(target < this.values[0]){
      return this.children[0].search(target);
    } else if(target < this.values[1]) {
      return this.children[1].search(target);
    } else if(target < this.values[2]) {
      return this.children[2].search(target);
    } else {
      return this.children[3].search(target);
    }

  },
  contains: function(value) {

  },

  depthFirstLog : function(iterator) {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
