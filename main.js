// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = array => {
    let arrayTotal = 0;
    const lastIndex = array.length - 1
    let doubleIt = false;

    for (let i = lastIndex; i >= 0; i--) {
        if (i === lastIndex) {
            arrayTotal += array[i];
            doubleIt = true;
        }
        if (i != lastIndex) {
            if (doubleIt === true) {
                if (array[i] * 2 > 9) {
                    arrayTotal += ((array[i] * 2) - 9);
                    doubleIt = false;
                } else {
                    arrayTotal += (array[i] * 2);
                    doubleIt = false;
                }
            } else {
                arrayTotal += (array[i]);
                doubleIt = true;
            }
        }
    }

    if (arrayTotal % 10 === 0) {
        return true;
    } else return false;
}


const findInvalidCards = arrayNest => {
    const tempArray = [];
    for (let i = 0; i < arrayNest.length; i++) {
        if (validateCred(arrayNest[i]) === false) {
            tempArray.push(arrayNest[i]);
        }
    }
    return tempArray;
}

const idInvalidCardCompanies = arrayNest => {
    const tempArray = [];
    const isDuplicate = company => (tempArray.includes(company) === false) ? tempArray.push(company) : console.log(`Duplicate found: ${company}`);

    for (let i = 0; i < arrayNest.length; i++) {
        switch (arrayNest[i][0]) {
            case 3:
                isDuplicate('Amex (American Express)');
                break;
            case 4:
                isDuplicate('Visa');
                break;
            case 5:
                isDuplicate('Mastercard');
                break;
            case 6:
                isDuplicate('Discover');
                break;
            default: console.log(`Company not found for credit card: ${arrayNest[i]}`)
        }
    }

    return tempArray;
}

console.log('##### Invalid Credit Card Numbers #####');
console.log(findInvalidCards(batch));
console.log('');
console.log('##### Invalid Card Companies #####');
console.log(idInvalidCardCompanies(findInvalidCards(batch)));


/**
 * Use different credit card numbers from a credit card number generator and validator site 
 * and test if your functions work for all types of credit cards.
 */


const mystery6 = [4, 5, 3, 9, 8, 9, 9, 3, 2, 8, 2, 3, 8, 7, 2, 7];
const mystery7 = [6, 0, 1, 1, 6, 8, 0, 1, 7, 2, 5, 8, 1, 6, 4, 0];
const mystery8 = [5, 2, 8, 4, 9, 4, 8, 9, 3, 4, 7, 5, 5, 1, 2, 4];
const mystery9 = [3, 4, 4, 2, 5, 6, 2, 3, 3, 1, 5, 2, 9, 6, 5];
const mystery10 = [3, 6, 3, 2, 7, 0, 0, 6, 7, 2, 4, 5, 0, 4];

const batchTwo = [mystery6, mystery7, mystery8, mystery9, mystery10];

console.log('');
console.log('##### Extra Credit #####');
console.log('##### Invalid Credit Card Numbers #####');
console.log(findInvalidCards(batchTwo));
console.log('');
console.log('##### Invalid Card Companies #####');
console.log(idInvalidCardCompanies(findInvalidCards(batchTwo)));

/**
 * To make it easier to test credit card numbers, create a function that 
 * accepts a string and converts it into an array of numbers 
 * like the initially provided arrays. (Check the hint for a helpful function)
 */

const convertStringToArray = cardString => parseInt(cardString.split());

const mystery11 = convertStringToArray('6011140372434793');
console.log(mystery11);
