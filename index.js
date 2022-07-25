/*
* Do not change or remove this file!!!
* Please read README.md for instructions
* If you have any questions, please reach OnlinePajak HR
*/
const fs = require('fs');
const settlement = require('./settlement');

let main = () => {
    const dataString = fs.readFileSync('input_sample.csv', 'utf8');
    const dataArray = dataString.split('\n');
    for (let i = 0; i < dataArray.length; i++) { 
        dataArray[i] = dataArray[i].split(",");
    }

    const outputArray = settlement.createSettlement(dataArray);

    for (let i = 0; i < outputArray.length; i++) { 
        outputArray[i] = outputArray[i].join(",");
    }

    const outputString = outputArray.join('\n');

    fs.writeFileSync('output_sample.csv', outputString);
}


main();