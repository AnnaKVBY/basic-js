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
        let result = "";
        let keuUpp = key.toUpperCase();
        let keuUppClean = keuUpp.replace(/\s/g, '');
        let messageUpp = message.toUpperCase();
        let messageUppClean = messageUpp.trim();
      
        for (let i = 0; i < messageUppClean.length; i++) {             
            if (!~alphabet.indexOf(messageUppClean[i])) {
             result += messageUppClean[i];
             continue;           
            }          
            let x = (messageUppClean[i].charCodeAt(0) + keuUppClean[i].charCodeAt(0)) % 26;            
            x += 'A'.charCodeAt(0);      
            result += String.fromCharCode(x);
        }     
        if (this._reverseFlag === true) return result.split("").reverse().join("");
        return result;
  }

  decrypt(message, key) {
      if (message === undefined || key === undefined) throw new Error (`Incorrect arguments!`);
      let resText="";
      let keuUpp = key.toUpperCase();
      let keuUppClean = keuUpp.replace(/\s/g, '');
      let messageUpp = message.toUpperCase();
      let messageUppClean = messageUpp.trim();
  
    for (let i = 0 ; i < messageUppClean.length ; i++){     
      if (!~alphabet.indexOf(messageUppClean[i])) {
        resText += messageUppClean[i];
        continue;           
       }    
        let x = (messageUppClean[i].charCodeAt(0) - keuUppClean[i].charCodeAt(0) + 26) % 26;      
        x += 'A'.charCodeAt(0);
        resText += String.fromCharCode(x);
    }
    if (this._reverseFlag === true) return resText.split("").reverse().join("");
    return resText;
  }
}

module.exports = {
  VigenereCipheringMachine
};
