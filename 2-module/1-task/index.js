/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
let salarie = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: NaN 
}

function sumSalary(salaries) {
  let sumOfSalaries = 0;
    
  for (let key in salaries) {
    
    if (typeof salaries[key] == "number" && isNaN(salaries[key]) == false && isFinite(salaries[key]) == true) {
      
      sumOfSalaries += salaries[key]; 
    } 

  }

  return sumOfSalaries
}


