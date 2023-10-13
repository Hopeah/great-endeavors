// Task
// Given two dates each in the format dd-mm-yyyy, you have to find the number of lucky dates between them (inclusive). To see if a date is lucky,

// Firstly, sequentially concatinate the date, month and year, into a new integer x erasing the leading zeroes.
// Now if x is divisible by either 4 or 7, then we call the date a lucky date.

function isLuckyDate(date) {
  // Concatenate date, month, and year without leading zeroes
  const [dateStr, monthStr, yearStr] = date.split('-');
  const x = parseInt(
    dateStr.replace(/^0+/, '') + monthStr.replace(/^0+/, '') + yearStr,
    10
  );

  // Check if x is divisible by 4 or 7
  return x % 4 === 0 || x % 7 === 0;
}

function countLuckyDates(startDate, endDate) {
  let luckyDatesCount = 0;
  let currentDate = startDate;

  const [startDay, startMonth, startYear] = startDate.split('-').map(Number);
  const [endDay, endMonth, endYear] = endDate.split('-').map(Number);

  while (
    currentDate !== endDate &&
    !(
      startYear > endYear ||
      (startYear === endYear && startMonth > endMonth) ||
      (startYear === endYear && startMonth === endMonth && startDay > endDay)
    )
  ) {
    if (isLuckyDate(currentDate)) {
      luckyDatesCount++;
    }

    const [day, month, year] = currentDate.split('-').map(Number);

    if (day === 31 && month === 12) {
      break;
    } else if (day === 31) {
      currentDate = `01-${(month + 1).toString().padStart(2, '0')}-${year}`;
    } else {
      currentDate = `${(day + 1).toString().padStart(2, '0')}-${month
        .toString()
        .padStart(2, '0')}-${year}`;
    }
  }

  return luckyDatesCount;
}

function processData(dateRange) {
  const [startDate, endDate] = dateRange.split(' ');
  const luckyDatesCount = countLuckyDates(startDate, endDate);
  console.log(luckyDatesCount);
}
