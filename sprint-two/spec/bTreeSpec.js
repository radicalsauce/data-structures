describe('bTree', function() {
  var bTree = makeBTree(['C','N']);

  it('should initialize an empty tree with values', function(){
    expect(bTree.values[0]).to.equal('C');
    expect(bTree.values[1]).to.equal('N');
  });

  it('should insert sorted values into a node', function(){
    bTree.insert('G');
    bTree.insert('A');
    expect(bTree.values[0]).to.equal('A');
    expect(bTree.values[1]).to.equal('C');
    expect(bTree.values[2]).to.equal('G');
    expect(bTree.values[3]).to.equal('N');
  });

  it('should split node at median after exceeding 4', function(){
    bTree.insert('H');
    console.log(bTree);
    expect(bTree.values[0]).to.equal('G');
    // expect(bTree.children[0].values[0]).to.equal('A');
    // expect(bTree.children[0].values[1]).to.equal('C');
    // expect(bTree.children[1].values[0]).to.equal('H');
    // expect(bTree.children[1].values[1]).to.equal('N');
  });

});
