const assert = require('assert');
const getBankByHours = require('../utils/getBankByHours')


describe('getBankByHours.js', function () {
  
  describe('Static datetime', function () {
    const firstDate = new Date(2018, 11, 24, 13)
    it(`should return BANKXYZ for this time ${firstDate}`, function () {
      const bankName = getBankByHours(firstDate)
      assert.equal(bankName, 'BANKXYZ');
    });

    const secondDate = new Date(2018, 11, 24, 16)
    it(`should return BANKASD for this time ${secondDate}`, function () {
      const bankName = getBankByHours(secondDate)
      assert.equal(bankName, 'BANKASD');
    });
  });

  describe('Random datetime', function () {
    const dateNow = new Date()

    const getHours = dateNow.getHours()
    const bank = getHours >= 15 ? 'BANKASD' : 'BANKXYZ'

    it(`should return BANKXYZ for this time ${dateNow}`, function () {
      const bankName = getBankByHours(dateNow)
      assert.equal(bankName, bank);
    });
  });

});