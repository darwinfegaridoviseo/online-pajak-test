const assert = require('assert');
const getBankUsingInvoice = require('../utils/getBankUsingInvoice')

const mockData = [
  '1',
  '1',
  'CENTRAL',
  '150000000.00',
  'INVOICE',
  '2021-01-30 15:00:00'
]

describe('getBankUsingInvoice.js', function () {
  describe('Check segregation invoice with total amount of 150,000,000', function () {
    const returnInvoice = getBankUsingInvoice(mockData)
    const banksLists = ['BANKABC','BANKASD','BANKXYZ']
    const expectedAmount = [10000000,100000000,40000000]


    it('should return an object', function () {
      assert.equal(typeof returnInvoice, 'object');
    });

    it('should return an length of 3', function () {
      assert.equal(returnInvoice.length, 3);
    });

    returnInvoice.forEach( (invoice, index) => {
      const bank = banksLists[index]
      const amount = expectedAmount[index]

      it(`should return an amount of ${amount.toFixed(2)}`, function () {
        assert.equal(Number(invoice.amount), amount);
      });
      it(`should return a bank name of ${bank}`, function () {
        assert.equal(invoice.bank, bank);
      });
    })

  });

});