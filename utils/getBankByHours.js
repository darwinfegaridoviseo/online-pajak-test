const moment = require('moment')

module.exports = (time) => {
    const getHours = moment(time).get('hour')
    return getHours >= 15 ? 'BANKASD' : 'BANKXYZ'
}