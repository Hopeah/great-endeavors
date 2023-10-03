// Task
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  // Write your code here
  const hours = s.slice(0, 2);
  const theRest = s.slice(2, 8);
  const amPm = s.slice(8);
  if (amPm === 'AM') {
    if (hours === '12') {
      return '00' + theRest;
    }
    return hours + theRest;
  } else if (amPm === 'PM') {
    if (hours === '12') {
      return hours + theRest;
    }
    return `${Number(hours) + 12}${theRest}`;
  }
}
