const { 
    dataMapping,
    sortByUserId,
    getBankUsingInvoice,
    mergeUsersByInvoice,
} = require('../utils/')


module.exports = (dataArray) => {

    dataArray = sortByUserId(dataArray) // Sort by user id
    const listOfBanks = ['BANKABC','BANKASD','BANKXYZ']

    let currentUser;

    let newDataArray = []

    let outputDataArray = [];

    dataArray = mergeUsersByInvoice(dataArray)
    console.log(dataArray)

    dataArray.forEach(data => {
        const userId = data[1]
        const transactionType = data[4]

        currentUser = userId // check for current user

        let newDataMapping = dataMapping(data) // Map to clean the data
        if(transactionType === 'INVOICE'){
            const invoiceData = getBankUsingInvoice(data)
            newDataArray = [...newDataArray, ...invoiceData]
        }else{
            newDataArray = [...newDataArray, newDataMapping]
        }
    });

    /** Filter banks and get the sum per bank name */
    listOfBanks.forEach( bank => {
        const bankFilter = newDataArray
                            .filter( filterData => filterData.bank === bank )
                            .map( bankMapping => Number(bankMapping.amount) )
        const totalAmountPerBank = bankFilter.reduce( (prev, num) => prev + num )

        outputDataArray = [...outputDataArray, [bank, totalAmountPerBank.toFixed(2)]]
    })
    return outputDataArray
}