/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  let result = str.toLowerCase();
  console.log(result)
    
  if (result.includes('1xbet') || result.includes('xxx') ) {
      return true
  }
  
  return false
}

