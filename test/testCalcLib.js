const assert = require('assert');
const calcLib = require('./../src/calcLib.js');

describe('formatArgs', function(){
  it('should return user arguments', function(){
    assert.deepStrictEqual(calcLib.formatArgs(['node', 'filename', 'operator', '1', '2']), ['operator', '1', '2']);
  });
});

describe('getOperation', function(){
  it('shoould return correct operation function', function(){
    assert.deepStrictEqual(calcLib.getOperation('sum'), calcLib.add);
  });
  it('should return undefined if incorrect operation is supplied', function(){
    assert.strictEqual(calcLib.getOperation('def'), undefined)
  });
});

describe('sum', function(){
  it('should return sum of integers', function(){
    assert.deepStrictEqual(calcLib.add(2, 3), 5);
    assert.deepStrictEqual(calcLib.add(-2, 3), 1);
    assert.deepStrictEqual(calcLib.add(2, -3), -1);
    assert.deepStrictEqual(calcLib.add(-2, -3), -5);
  });
});

describe('operationOverRange', function(){
  it('should return sum of all number in that range if increment the is not given', function(){
    assert.deepStrictEqual(calcLib.operationOverRange(calcLib.add, 1, 100), 5050);
    assert.deepStrictEqual(calcLib.operationOverRange(calcLib.add, 1, 20), 210);
  });
  it('should return sum of all number in that range if increment is given', function(){
    assert.deepStrictEqual(calcLib.operationOverRange(calcLib.add, 1, 12, 5), 18);
    assert.deepStrictEqual(calcLib.operationOverRange(calcLib.add, 1, 20, 3), 70);
  });
});

describe('swap', function(){
  it('should swap the 2 values and return them in array', function(){
    assert.deepStrictEqual(calcLib.swap(1, 2), [2, 1]);
    assert.deepStrictEqual(calcLib.swap(100, 567), [567, 100]);
  });
});
