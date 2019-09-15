//
// 45: Map.prototype.get()
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map.prototype.get` returns the element from the map for a key', function(){
  it('`get(key)` returns the value stored for this key', function() {
    let map = new Map();
    map.set('key', 'value');
    const value = map.get('key');
    assert.equal(value, 'value');
  });
  it('multiple calls still return the same value', function() {
    let map = new Map();
    map.set('value', 'value');
    var value = map.get(map.get(map.get('value')));
    assert.equal(value, 'value');
  });
  it('requires exactly the value as passed to `set()`', function() {
    let map = new Map();
    const obj = {};
    map.set(obj, 'object is key');
    assert.equal(map.get(obj), 'object is key');
  });
  it('leave out the key, and you get the value set for the key `undefined` (void 0)', function() {
    let map = new Map();
    map.set(void 0, 'yo');
    const value = map.get(void 0);
    assert.equal(value, 'yo');
  });
  it('returns undefined for an unknown key', function() {
    let map = new Map();
    map.set(void 0, undefined);
    const value = map.get(void 0);
    assert.equal(value, void 0);
  });
});
\\
// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map` is a key/value map', function(){
  it('`Map` is a new global constructor function', function() {
    const typeOfMap = 'function';
    assert.equal(typeof Map, typeOfMap);
  });
  it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
    let map = new Map();
    map.set('key', 'value');
    const value = map.get('key');
    assert.equal(value, 'value');
  });
  it('`has()` tells if map has the given key', function() {
    let map = new Map();
    map.set('key', 'value');
    const hasIt = map.has('key');
    assert.equal(hasIt, true);
  });
  it('a map is iterable', function() {
    let map = new Map();
    map.set('1', 'one');
    map.set('2', 'two');
    const mapAsArray = Array.from(map); // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
    assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
  });
  it('complex types can be keys', function() {
    const obj = {x: 1};
    const otherObj = {x: 1};
    let map = new Map();
    map.set(obj.x, '');
    map.set(otherObj.x, '');
    assert.equal(map.has(otherObj), false);
  });
});
