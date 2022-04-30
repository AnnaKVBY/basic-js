const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let Arr = [];  
  if (!Array.isArray(members)) return false;
  for (let mem=0; mem < members.length; mem++) {
    if (typeof members[mem] === "string")  {
      let str = members[mem].trim();
      let litter = str[0].toUpperCase();
      Arr.push(litter);  
           
    }    
    
    }
    return Arr.sort().join('');
  }


module.exports = {
  createDreamTeam
};
