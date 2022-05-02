const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month;  
  if (!(date instanceof Date)) return 'Unable to determine the time of year!';
  if (date.length === 0) return 'Unable to determine the time of year!';
  if (date.getMonth() >= 13) return 'Invalid date!';
  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      month = "winter";
      break;
    case 2:
    case 3:
    case 4:
      month = "spring";
      break;  
    case 5:
    case 6:
    case 7:
      month = "summer";
      break; 
    case 8:
    case 9:
    case 10:
      month = "autumn (fall)";             
  }
  return month;  
}



module.exports = {
  getSeason
};
