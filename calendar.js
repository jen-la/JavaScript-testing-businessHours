// Part 1 - return true or false if business hours
function businessHours(dayNumber, hourNumber) {
    if (dayNumber > 0 && dayNumber < 6 && hourNumber >=9 && hourNumber <= 18) {
      return true;
    } else {
      return false;
    }
  }  
// Tests
console.log(businessHours(0, 10)); // False
console.log(businessHours(1, 9)); // True
console.log(businessHours(2, 20)); // False

// Part 2 - return day (number) of week

function getDayNumber(janFirstDayNumber, yearDayNumber) {
  let dayNumber = (janFirstDayNumber + yearDayNumber) % 7; 
  return dayNumber;
}
// Tests
console.log(getDayNumber(0, 7)); // 0
console.log(getDayNumber(3, 8)); // 4

// Part 3 - return true or false - inputs are yearDayNumber (int, 0-365) and hourNumber (int, 0-23)
function checkHours(janFirstDayNumber, yearDayNumber, hourNumber) {
  let dayNumber = (janFirstDayNumber + yearDayNumber) % 7;
  // Assign days for easy testing
  let weekday = "";
  if (dayNumber === 0) {
    weekday = "Sunday";
  } else if (dayNumber === 1) {
    weekday = "Monday";
  } else if (dayNumber === 2) {
    weekday = "Tuesday";
  } else if (dayNumber === 3) {
    weekday = "Wednesday";
  } else if (dayNumber === 4) {
    weekday = "Thursday";
  } else if (dayNumber === 5) {
    weekday = "Friday";
  } else {
    weekday = "Saturday";
  }
  // Check if business hours
  console.log(weekday);
  if (dayNumber > 0 && dayNumber < 6 && hourNumber >=9 && hourNumber <= 18) {
    return true;
  } else {
    return false;
  }
}   
// Tests
console.log(checkHours(1, 3, 10)); // Thursday - True
console.log(checkHours(2, 1, 9)); // Wednesday - True
console.log(checkHours(4, 2, 20)); // Saturday - False

// Challenge - replace yearDayNumber and hourNumber with Date() variable
let d = new Date();
let x = d.getDay();
let y = d.getHours();

function newCheckHours(d) {
  if (x > 0 && x < 6 && y >=9 && y <= 18) {
    return true;
  } else {
    return false;
  }
}   
console.log(newCheckHours(d)); // True or False depending on computer date/time