/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(users, maxAge) {
  return users.map(({balance,name,age}) => {
    return age <= maxAge ? `\n${name}, ${balance}` : null 
  }).join('').trim();

}