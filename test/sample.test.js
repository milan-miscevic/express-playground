import sum from '../src/sample.js';
import assert from 'assert';

describe("App", function(){
  it("should test if function returns 1+2 = 3", function(){
      assert.equal(sum(1,2), 3);
  });
  it("should test if function returns -3+2 = -1", function(){
      assert.equal(sum(-3,2), -1);
  });
});
