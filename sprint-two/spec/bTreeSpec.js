describe('bTree', function() {
  var bTree = makeBTree(['C','N']);

  it('should initialize an empty tree with values', function(){
    expect(bTree.root.values[0]).to.equal('C');
    expect(bTree.root.values[1]).to.equal('N');
  });

  it('should insert sorted values into a node', function(){
    bTree.insert('G');
    bTree.insert('A');
    expect(bTree.root.values[0]).to.equal('A');
    expect(bTree.root.values[1]).to.equal('C');
    expect(bTree.root.values[2]).to.equal('G');
    expect(bTree.root.values[3]).to.equal('N');
  });

  it('should split node at median after exceeding 4', function(){
    bTree.insert('H');
    expect(bTree.root.values[0]).to.equal('G');
    expect(bTree.root.children[0].values[0]).to.equal('A');
    expect(bTree.root.children[0].values[1]).to.equal('C');
    expect(bTree.root.children[1].values[0]).to.equal('H');
    expect(bTree.root.children[1].values[1]).to.equal('N');
  });

  it('should augment child nodes up to 4', function(){
    bTree.insert('E');
    bTree.insert('K');
    bTree.insert('Q');
    expect(bTree.root.values[0]).to.equal('G');
    expect(bTree.root.children[0].values[0]).to.equal('A');
    expect(bTree.root.children[0].values[1]).to.equal('C');
    expect(bTree.root.children[0].values[2]).to.equal('E');
    expect(bTree.root.children[1].values[0]).to.equal('H');
    expect(bTree.root.children[1].values[1]).to.equal('K');
    expect(bTree.root.children[1].values[2]).to.equal('N');
    expect(bTree.root.children[1].values[3]).to.equal('Q');
  });

});
