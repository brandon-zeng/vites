var CryptoJS = require("crypto-js");

var phrase = '3zTvzr3p67VC61jmV54rIYu1545x4TlY';

var encrypt = function(text) {
  var ciphertext = CryptoJS.AES.encrypt(text, phrase);
  return ciphertext.toString();
}

var decrypt = function(encrypted) {
  var bytes  = CryptoJS.AES.decrypt(encrypted, phrase);
  var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
}

module.exports = {
    encrypt: encrypt,
    decrypt: decrypt
}