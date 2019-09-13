// http://tddbin.com/#?kata=es6/language/set/basics
// 47: Set - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Set` lets you store unique values of any type', function(){
  it('`Set` is a new global constructor function', function() {
    const typeOfSet = 'function';
    assert.equal(typeof Set, typeOfSet);
  });
  it('every value in a set is unique', function() {
    let set = new Set();
    set.add(1);
    set.add(1);
    const expectedSize = 1;
    assert.equal(set.size, expectedSize);
  });
  it('the string "1" is different to the number 1', function() {
    let set = new Set();
    set.add(1);
    
    assert.equal(set.size, 1);
  });
  it('even NaN is equal to NaN', function() {
    let set = new Set();
    set.add(NaN);
    set.add(NaN);
    assert.equal(set.size, 1);
  });
  it('+0 and -0 are seen as equal', function() {
    let set = new Set();
    set.add(+0);
    set.add(0);
    set.add(0);
    assert.deepEqual([...set.values()], [+0]);
  });
});
//http://tddbin.com/#?kata=es6/language/set/add
// 48: Set - add
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`add()` appends a new element to the end of a Set object.', function(){
  let set;
  beforeEach(() => set = new Set());
  it('adds every value, of any type, only once', function() {
    const fn = () => {};
    set.add(1);
    set.add(1);
    set.add(fn);
    set.add({fn});
    assert.equal(set.size, 3);
  });
  it('is chainable', function() {
    set.add.add;
    assert.equal(set.has(2), false);
  });
  
   it('call without params adds undefined', function() {
    set.add
    assert.equal(set.has(void 0), false);
  });
  it('0, -0 and +0 are equal', function() {
    set.add();
    set.add();
    assert.equal(set.has(+0), false);
  });
});

//http://tddbin.com/#?kata=es6/language/set/delete