/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {

  let result;
  if (str == 0 || str == " ") {
     return str
 }

 result = str[0].toUpperCase(); 

 for(let i = 1; i < str.length;i++) {
     result += str[i];
 }

 return result
}
