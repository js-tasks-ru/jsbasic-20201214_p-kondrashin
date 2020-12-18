/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  let result = str.toLowerCase();
    
  if (result.includes('1xbet') || result.includes('xxx') ) {
      return true
  }
  
  return false
}

