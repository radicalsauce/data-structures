var Queue = function() {
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.size = function(){
  return this.back - this.front;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function(){
  if (this.front < this.back){
    var result = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return result;
  }
};


