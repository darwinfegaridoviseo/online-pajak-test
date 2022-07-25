const getBankByTransactionType = require('./getBankByTransactionType')
const getBankByHours = require('./getBankByHours')
const sortByUserId = require('./sortByUserId')
const getBankUsingInvoice = require('./getBankUsingInvoice')
const mergeUsersByInvoice = require('./mergeUsersByInvoice')


const dataMapping = (data) => {
    
    const region = data[2]
    const time = data[5]
    const transactionType = data[4]
    const amount = data[3]
    let bank;


    switch (transactionType) {
        case "TAX":
            bank = 'BANKABC'
            break;
        case "BPJS":
            bank = getBankByTransactionType(region)
            break;
        case "PAYROLL":
            bank = getBankByHours(time)
            break;
    }


    return {
        region,
        amount,
        time,
        transactionType,
        bank
    }
}

module.exports = {
    dataMapping,
    sortByUserId,
    getBankUsingInvoice,
    mergeUsersByInvoice
}