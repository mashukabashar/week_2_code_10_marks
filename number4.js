function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap Year.");
    } else {
        console.log("Not a Leap Year.");
    }
}

let year = parseInt(prompt("Enter a year:"));
leapYear(year);

