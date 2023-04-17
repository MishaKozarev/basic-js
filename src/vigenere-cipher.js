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


 class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(mes, key) {
    if (!mes || !key) {
      throw Error("Incorrect arguments!");
    }
    key = key.toUpperCase().repeat(mes.length).slice(0, mes.length);
    mes = mes.toUpperCase();

    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';

    for (let i = 0, j = 0; i < mes.length; i++) {
      let num = mes[i];

      if (num.charCodeAt() > 64 && num.charCodeAt() < 91) {
        num = abc[(abc.length + abc.indexOf(mes[i]) + abc.indexOf(key[j])) % abc.length];
        j++;
      } else {
        num = mes[i];
      }
      result += num;
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(mes, key) {
    if (!mes || !key) {
      throw Error("Incorrect arguments!");
    }
    key = key.toUpperCase().repeat(mes.length).slice(0, mes.length);
    mes = mes.toUpperCase();

    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';

    for (let i = 0, j = 0; i < mes.length; i++) {
      let num = mes[i];

      if (num.charCodeAt() > 64 && num.charCodeAt() < 91) {
        num = abc[(abc.length + abc.indexOf(mes[i]) - abc.indexOf(key[j])) % abc.length];
        j++;
      } else {
        num = mes[i];
      }

      result += num;
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}



module.exports = {
  VigenereCipheringMachine
};
