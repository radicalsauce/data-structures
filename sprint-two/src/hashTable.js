var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(i)){
    this._storage.set(i, {});
  }
  if(!this._storage.get(i)[k]) {
    this._size++;
  }
  this._storage.get(i)[k] = v;
  if(this._size / this._limit >= 0.75){
    this.double();
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)) {
    return this._storage.get(i)[k];
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i)[k]) {
    this._size--;
  }
  delete this._storage.get(i)[k];
  if(this._size / this._limit < 0.25){
    this.halve();
  }
};

HashTable.prototype.double = function(){
  this._limit = this._limit * 2;
  this._size = 0;
  this._oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);
  this._oldStorage.each((function(obj){
    for(var key in obj){
      this.insert(key, obj[key]);
    }
  }).bind(this));
};

HashTable.prototype.halve = function(){
  this._limit = this._limit / 2;
  this._size = 0;
  this._oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);
  this._oldStorage.each((function(obj){
    for(var key in obj){
      this.insert(key, obj[key]);
    }
  }).bind(this));
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
