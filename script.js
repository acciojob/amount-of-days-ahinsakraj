//your JS code here. If required.
function daysOfAYear(year) {
    // Check if the year is a leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Return the number of days based on leap year status
    return isLeapYear ? 366 : 365;
}

// Example usage:
// const yearToCheck = 2023;
// const daysInYear = daysOfAYear(yearToCheck);
// console.log(`There are ${daysInYear} days in the year ${yearToCheck}.`);

const year=prompt("Enter the year : ");
alert(daysOfAYear(year));