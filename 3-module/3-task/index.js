/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {

    return str.split('-').map(function (elem, index) {
     
        return index == 0 ? elem : elem[0].toUpperCase() + elem.slice(1) 
       
    }).join('');    
}
