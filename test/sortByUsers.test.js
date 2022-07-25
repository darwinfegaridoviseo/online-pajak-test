const assert = require('assert');
const sortByUserId = require('../utils/sortByUserId')


describe('sortByUserId.js', function () {
  const sampleData = [
    [0,1],
    [1,2],
    [2,3],
    [3,1],
    [4,2],
    [5,3],
    [6,1],
]
  describe(`Test sorting users ${JSON.stringify(sampleData)}`, function () {
    
    const expectedSort = [[0,1],[3,1],[6,1],[1,2],[4,2],[2,3],[5,3]]
    const sortUsers = sortByUserId(sampleData)
    
    it(`should return user length of 7`, function () {
      assert.equal(sortUsers.length, 7);
    });

    it(`should return sorted users ${JSON.stringify(sortUsers)}`, function () {
      assert.equal(JSON.stringify(sortUsers), JSON.stringify(expectedSort));
    });

    
  });


});