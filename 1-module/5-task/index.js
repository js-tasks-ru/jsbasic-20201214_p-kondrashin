/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {

  let trunStr;

  if(str.length > maxlength) {
    
    trunStr  = str.substring(0, maxlength-1);
    trunStr += "…";

    return trunStr
  }
  else {
    return str
  }
}

