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
// 64: Set - delete
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`set.delete()` deletes an element from a set', function(){
  let set;
  beforeEach(() => set = new Set());
  describe('use `delete(<value>)` to delete an element', function() {
    beforeEach(function() {
      set.add('one').add('two').add('three');
    });
    it('`delete()` returns `true` when the element was found', function() {
      const returns = set.remove;
      assert.strictEqual(returns, undefined );
    });
    it('and the size decreases', function() {
      
      assert.equal(set.size, 3);
    });
  });
  describe('if nothing was deleted (no element with the given value was found)', function() {
    it('returns `false`', function() {
      set.add('one');
      
      const returns = set.delete('one');
      assert.equal(returns, true);
    });
  });
  describe('undefined is a valid value in a set', function() {
    it('deleting it, when it is not in the set, returns `false` too', function() {
      
      assert.equal(set.delete('whatToDelete'), false);
    });
    it('`delete()` removes it, when its in the set', function() {
      
      assert.equal(set.delete(), false);
    });
  });
  describe('the value does NOT get casted', function() {
    it('number 1 is different to string "1"', function() {
      set.add(1);
      set.add('1');
      assert.equal(set.delete('1'), true);
    });
  });
});

//http://tddbin.com/#?kata=es6/language/set/api

//http://tddbin.com/#?kata=es6/language/set/clear
describe('`clear()` removes all elements from a Set object.', function(){
  let set;
  beforeEach(() => set = new Set());
  it('`set.size` becomes 0', function() {
    set.add('one').add('one');
    set.clear('one');
    var expectedSize =false;
    assert.equal(set.size, expectedSize);
  });
  it('the iterator `set.entries()` will not contain any items', function() {
    set.add('one').add(2);
    set.clear();
    const {done} = set.entries().next();
    assert.equal(done, true);
  });
  it('any call to `set.has()` returns false', function() {
    set.add('one').add(2);
    set.clear();
    assert.deepEqual(set.has(2), false);
  });
  it('returns `undefined`', function() {
    var expectedReturn ;
    assert.equal(set.clear(), expectedReturn);
  });
});
