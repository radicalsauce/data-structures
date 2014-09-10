var makeQueue = function(){
  var queue = Object.create(queueMethods);
  queue.front = 0;
  queue.back = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {
  size: function(){
    return this.back - this.front;
  },
  enqueue: function(value){
    this.storage[this.back] = value;
    this.back++;
  },
  dequeue: function(){
    if (this.front < this.back){
      var result = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return result;
    }
  }
};


