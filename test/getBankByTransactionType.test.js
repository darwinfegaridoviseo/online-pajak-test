const assert = require('assert');
const getBankByTransactionType = require('../utils/getBankByTransactionType')


describe('getBankByTransactionType.js', function () {
  
  describe('Test bank by Region', function () {

    it(`should return BANKABC for region WEST`, function () {
      const bankName = getBankByTransactionType('WEST')
      assert.equal(bankName, 'BANKABC');
    });
    it(`should return BANKASD for region CENTRAL`, function () {
      const bankName = getBankByTransactionType('CENTRAL')
      assert.equal(bankName, 'BANKASD');
    });
    it(`should return BANKXYZ for region EAST`, function () {
      const bankName = getBankByTransactionType('EAST')
      assert.equal(bankName, 'BANKXYZ');
    });

    
  });


});