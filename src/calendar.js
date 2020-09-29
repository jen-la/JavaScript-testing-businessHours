// Part 1 - return true or false if business hours
const businessHours = (dayNumber, hourNumber) => {
    
  if (typeof dayNumber !== 'number') {
    throw new Error(`${dayNumber} is not a number`);
  }

  if (typeof hourNumber !== 'number') {
    throw new Error(`${hourNumber} is not a number`);
  }

  if (dayNumber < 0 || dayNumber > 6) {
    throw new Error(`${dayNumber} is not between 0-6`);
  }

  if (hourNumber < 0 || hourNumber > 24) {
    throw new Error(`${hourNumber} is not between 0-24`);
  }

  if (dayNumber > 0 && dayNumber < 6 && hourNumber >=9 && hourNumber <= 18) {
      return true;
    } else {
      return false;
    }
  }  

// Part 2 - return day (number) of week
const getDayNumber = (janFirstDayNumber, yearDayNumber) => {
  
  if (typeof janFirstDayNumber !== 'number') {
    throw new Error(`${janFirstDayNumber} is not a number`);
  }

  if (typeof yearDayNumber !== 'number') {
    throw new Error(`${yearDayNumber} is not a number`);
  }

  if (janFirstDayNumber < 0 || janFirstDayNumber > 6) {
    throw new Error(`${janFirstDayNumber} is not between 0-6 inclusive`);
  }

  if (yearDayNumber < 0 || yearDayNumber > 365) {
    throw new Error(`${yearDayNumber} is not between 0-365 inclusive`);
  }

  const dayNumber = (janFirstDayNumber + yearDayNumber) % 7; 
  return dayNumber;
}

// Part 3 - return true or false - inputs are yearDayNumber (int, 0-365) and hourNumber (int, 0-23)
const checkHours = (janFirstDayNumber, yearDayNumber, hourNumber) => {
  const dayNumber = getDayNumber(janFirstDayNumber, yearDayNumber); 

  // Check if business hours
  if (businessHours(dayNumber, hourNumber)) {
    return true;
  } else {
    return false;
  }
}   

// Challenge - replace yearDayNumber and hourNumber with Date() variable
let d = new Date();
let x = d.getDay();
let y = d.getHours();

const newCheckHours = (d) => {
  if (x > 0 && x < 6 && y >=9 && y <= 18) {
    return true;
  } else {
    return false;
  }
}   
// console.log(newCheckHours(d)); // True or False depending on computer date/time