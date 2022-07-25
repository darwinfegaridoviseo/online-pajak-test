const settlementModule = require('./src/settlementModule')

/**
 * You should not remove createSettlement function or change its parameter
 * this method should return 2 dimensional array so index.js can write it back to output file
 * 
 * @param {*} dataArray 
 * 
 * @returns {*} 
 */


let createSettlement = (dataArray) => {

    const outputDataArray = settlementModule(dataArray)
    return outputDataArray;
}

module.exports = {
 createSettlement
}