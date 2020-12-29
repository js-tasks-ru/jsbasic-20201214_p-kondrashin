/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

 
function getMinMax(str) {
  const arr = str.split(',').join(' ').split(' ')
      .filter(elem => Number(elem))
      .sort((a, b) => a - b);

  return {
    min: Number(arr.shift()), 
    max: Number(arr.pop())
  } 
}
