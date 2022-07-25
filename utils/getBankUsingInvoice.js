module.exports = (data) => {
    let bank;
    let totalAmount = Number(data[3])
    let amount = 0;

    const listOfBanks = ['BANKABC','BANKASD','BANKXYZ']
    const region = data[2]
    const time = data[5]
    const transactionType = data[4]

    let listOfInvoice = []

    const dataInvoice = {
        region,
        amount,
        time,
        transactionType,
        bank: ''
    }

    // segregate invoice data by bank 
    const addInvoiceData = (invoice) => {
        listOfInvoice = [...listOfInvoice, {...dataInvoice, ...invoice}]
    }

    /**
     * Check total amount if not zero
     * then will deduct all the required limit amount base on bank requirements
     * and it will create separated transaction invoice
     */

    let numberOfLoop = 0;
    let isLooping = true
    while(true){
        if(totalAmount > 0){
            switch (numberOfLoop) {
                case 0:
                    amount = totalAmount >= 10000000 ? 10000000 : totalAmount
                    totalAmount = totalAmount >= 10000000 ? totalAmount - 10000000 : 0
                    bank = 'BANKABC'

                    addInvoiceData({amount: amount.toFixed(2), bank})
                    numberOfLoop++
                    break;
                case 1:
                    amount = totalAmount >= 100000000 ? 100000000 : totalAmount
                    totalAmount = totalAmount >= 100000000 ? totalAmount - 100000000 : 0
                    bank = 'BANKASD'

                    addInvoiceData({amount: amount.toFixed(2), bank})
                    numberOfLoop++
                    break;
                default:
                    amount = totalAmount
                    totalAmount = 0
                    bank = 'BANKXYZ'

                    addInvoiceData({amount: amount.toFixed(2), bank})
                    break;
            }
            isLooping = true
        }else{
            isLooping = false
            break;
        }
    }

    return listOfInvoice
}