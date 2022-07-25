const assert = require('assert');
const mergeUsersByInvoice = require('../utils/mergeUsersByInvoice')


describe('mergeUsersByInvoice.js', function () {
  describe('Check merge users [3, 80,000,00 + 120,000,00], [5, 100,000,000, 20,000,000]', function () {

    const expectedMergeAmount = [200000000, 120000000]
    const mockData = [
      [
        '4',
        '3',
        'CENTRAL',
        '80000000.00',
        'INVOICE',
        '2021-01-30 15:00:00'
      ],
      [
        '8',
        '3',
        'CENTRAL',
        '120000000.00',
        'INVOICE',
        '2021-01-30 15:00:00'
      ],
      [
        '4',
        '5',
        'CENTRAL',
        '100000000.00',
        'INVOICE',
        '2021-01-30 15:00:00'
      ],
      [
        '8',
        '5',
        'CENTRAL',
        '20000000.00',
        'INVOICE',
        '2021-01-30 15:00:00'
      ]
    ]
    const mergeInvoices = mergeUsersByInvoice(mockData)

    it(`should return length of 2`, function () {
      assert.equal(mergeInvoices.length, 2);
    });

    mergeInvoices.forEach( (invoice, index) => {
      const amount = expectedMergeAmount[index]

      it(`should return amount of ${amount}`, function () {
        assert.equal(Number(invoice[3]), amount);
      });
    } )

    

  });

});