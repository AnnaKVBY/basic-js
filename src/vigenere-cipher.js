const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this._reverseFlag = !isDirect;
  }
  
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error (`Incorrect arguments!`);

    let keuUpp = key.toUpperCase();
    let keuUppClean = keuUpp.replace(/\s/g, '');
    let messageUpp = message.toUpperCase();
    let messageUppClean = messageUpp.trim();
    let result = [];

    for (let i=0, n=0; i< messageUppClean.length; i++, n++) {
      let elem = messageUppClean[i];
      if (!~alphabet.indexOf(elem)) {
        result.push(elem);
        n--;
      }
      let elemcode = elem.charCodeAt(0);




    }
   


  }
  decrypt(message, key) {
   
  }
}

module.exports = {
  VigenereCipheringMachine
};
