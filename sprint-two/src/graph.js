var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodes[newNode] = {
    value: newNode,
    edges: {}
  };

  // If this the first node do nothing else
  // If this is the second node
    // If toNode is passed connect it to toNode
    // Else connect it to the first node
  // Else connect newNode to toNode if passed

  var count = 0;
  var first;
  for(var key in this.nodes){
    if(count === 0){
      first = key;
    }
    count++;
  }

  if (count === 2) {
    if (toNode) {
      this.addEdge(newNode, toNode);
    } else {
      this.addEdge(newNode, first);
    }
  }

  if (count > 2) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  for(var key in this.nodes){
    if(this.nodes[key].value === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.nodes[fromNode].edges[toNode] ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].edges[toNode];
  var count = 0;
  for(var key in this.nodes[fromNode].edges){
    count++;
  }
  if (count === 0) {
    this.removeNode(fromNode);
  }

  delete this.nodes[toNode].edges[fromNode];
  count = 0;
  for(key in this.nodes[toNode].edges){
    count++;
  }
  if (count === 0) {
    this.removeNode(toNode);
  }
};

graph = new Graph();
console.log(JSON.stringify(graph));
graph.addNode('puppies');
graph.addNode('kittens');
console.log(graph.getEdge('puppies', 'kittens'));

/*
 * Complexity: What is the time complexity of the above functions?
 */
