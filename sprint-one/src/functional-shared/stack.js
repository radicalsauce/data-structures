var makeStack = function() {
  var stack = {};
  stack.storage = {};
  stack.length = 0;
  return _.extend(stack, stackMethods);
};

var stackMethods = {
  size: function(){
    return this.length;
  },
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function(){
    if(this.length > 0){
      this.length--;
      var result = this.storage[this.length];
      delete this.storage[this.length];
      return result;
    }
  }
};


