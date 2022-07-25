# OnlinePajak Settlement Module

OP is a fast growing fintech company that allows user to pay tax, BPJS, invoice, and payroll salary

You are working on transaction settlement module that will create a settlement report every end of day

1 User can make multiple transactions with different type. Input of this module is a set of comma separated data that represent multiple user transactions happened within a range of date. Settlement module will then process all transaction inputs and will output a settlement report for disbursement system to process later. 

A Settlement report is basically a set of transfer instruction categorized by it's disbursement bank channel. At the end of the day, OnlinePajak will settle all the transaction to our bank partner according to each of bank capability. OnlinePajak registered bank partner are 
- Bank ABC
- Bank XYZ
- Bank ASD

This module will accept input in csv format as follows :

....

*1,1,WEST,12000.00,TAX,2021-01-30 15:00:00*

*2,2,EAST,12000.00,BPJS,2021-01-30 15:00:00*

*3,1,WEST,12000.00,PAYROLL,2021-01-30 15:00:00*

*4,3,CENTRAL,12000.00,INVOICE,2021-01-30 15:00:00*

....

|Index Number | Name | Explanation |
|--|--|--|
| 0 | Transaction ID |ID of transaction in integer|
| 1 | User ID |ID of user in integer|
| 2 | Region |Region of transaction happened (WEST,CENTRAL,EAST)|
| 3 | Amount |Amount of transaction, data type double with 2 digits precision scale|
| 4 | Transaction Type|Type of transaction (TAX, BPJS, INVOICE, PAYROLL)|
| 5 | Transaction Date|Date of transaction in moment.js string format(YYYY-MM-DD HH:mm:ss)|


Settlement module will then process this input and will output comma separated data as follows : 

*BANKABC,50000.00*

*BANKASD,12000.00*

*BANKXYZ,60000.00*

|Index Number | Name | Explanation |
|--|--|--|
| 0 | Bank Name |Name of the Bank (BANKABC, BANKASD, BANKXYZ)|
| 1 | Amount |Amount of money to be settled, accumulated from transaction amount|


There is set of rules that applies when creating a settlement report : 

 1. **TAX** Transaction Type can only be settled through **BANKABC**
 2. **BPJS** Transaction Type that are paid in **WEST** region must be settled through **BANKABC**
 3. **BPJS** Transaction Type that are paid in **CENTRAL** region must be settled through **BANKASD**
 4. **BPJS** Transaction Type that are paid in **EAST** region must be settled through **BANKXYZ**
 5. **PAYROLL** Transaction Type that are paid at 00:00:00 -  14:59:59 must be settled through **BANKXYZ**
 6. **PAYROLL** Transaction Type that are paid at 15:00:00 - 23:59:59 must be settled through **BANKASD**

**INVOICE** Transaction Type have different set of rules according to total amount of **INVOICE** Transaction per user made. Please take note that the **amount taken into consideration is grouped per User ID**

1. First 10.000.000 of 1 User ID total amount **INVOICE** Transaction must be settled through **BANKABC**
2. Next 100.000.000 of 1 User ID total amount **INVOICE** Transaction must be settled through **BANKASD**
3. For subsequent total amount of 1 User ID **INVOICE** Transaction must be settled through **BANKXYZ**

Example for transaction type **INVOICE** only: 

Total **INVOICE** Transaction Amount of User 1 : 120.000.000
- 10.000.000 should goes to **BANKABC**
- 100.000.000 should goes to **BANKASD**
- 10.000.000 should goes to **BANKXYZ**

Total **INVOICE** Transaction Amount of User 2 : 90.000.000
- 10.000.000 should goes to **BANKABC**
- 80.000.000 should goes to **BANKASD**

so, the settlement report should calculate the total of money that should go to which bank as : 

*BANKABC,20000000.00*

*BANKASD,180000000.00*

*BANKXYZ,10000000.00*

## Technical Guideline
There are several things you must take note when developing this module. You must not change anything that is written in `index.js` file, as this file will be used to execute automated testing.
 
However, you're free to change the code written inside `settlement.js` provided `index.js` can still execute function `createSettlement(dataArray)`.

Input should be in comma separated .csv file.
Output should be in a comma separated .csv file.

Feel free to organize your code in folders according to best practices of code design patterns. Make sure your code is reuseable and easy to read. You must create test for your own module (except the `index.js` and `settlement.js`) using any js test frameworks.


## To run the app

Note: 
- All the data should be on the ` input_sample.csv ` file then the result will print out to ` output_sample.csv ` file.
- Node version >= v14.x.x

First install dependencies
` npm install `

Then run the script
` npm run install `

