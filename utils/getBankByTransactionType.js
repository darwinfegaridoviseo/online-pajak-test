module.exports = (transactionType) => {
    let bank;
    switch (transactionType) {
        case 'WEST':
            bank = 'BANKABC'
            break;
        case 'CENTRAL':
            bank = 'BANKASD'
            break;
        case 'EAST':
            bank = 'BANKXYZ'
            break;
    }
    return bank;
}