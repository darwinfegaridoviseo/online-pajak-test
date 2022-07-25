module.exports = (dataArray) => {
    
    const notInvoice = dataArray.filter( data => data[4] !== 'INVOICE' )
    const listOfInvoice = dataArray.filter( data => data[4] === 'INVOICE' )

    // Get all unique users
    const getSetOfUsers = [...new Set(listOfInvoice.map( invoice => invoice[1] ))]

    let mergeInvoices = []

    getSetOfUsers.forEach( user => {
        const getUserInvoices = listOfInvoice.filter( userInvoice => userInvoice[1] === user )
        const totalAmountOfInvoices = getUserInvoices.reduce((a, b) => Number(a[3]) + Number(b[3]))
        const copyOfInvoice = listOfInvoice.find( findUser => findUser[1] === user )
        copyOfInvoice[3] = totalAmountOfInvoices.toFixed(2)
        mergeInvoices = [...mergeInvoices, copyOfInvoice]
    })

    return [...notInvoice, ...mergeInvoices]
}