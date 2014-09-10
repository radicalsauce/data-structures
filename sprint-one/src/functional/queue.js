var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function(){
    if(front < back){
      var result = storage[front];
      delete storage[front];
      front++;
      return result;
    }
  };

  someInstance.size = function(){
    return back - front;
  };

  return someInstance;
};
