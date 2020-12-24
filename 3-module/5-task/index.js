/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

 
function getMinMax(str) {
  let arr = str.split(" ").join(',').split(', ').join().split(',')
      .filter(elem => Number(elem))
      .sort((a, b) => a - b);

  let min = Number(arr.shift()),
      max = Number(arr.pop());

  return {min, max} 
}
