/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */

function createElementTable(data) {
  let cells = '';

  function makeTemplateTable(string) {
      return `<table>
                <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                    <th>Зарплата</th>
                    <th>Город</th><th>
                    </th></tr> 
                </thead>
                <tbody>${string}</tbody>
              </table>`
  } 

  function makeTemplateCells({name, age, salary, city} = {elem}){
    cells += `<tr>
      <td>${name}</td>
      <td>${age}</td>
      <td>${salary}</td>
      <td>${city}</td>
      <td><button>X</button></td>
    </tr>`
  } 

  data.forEach(elem => makeTemplateCells(elem)); 

  let table = document.createElement('table');
  table.innerHTML = makeTemplateTable(cells);

  return table 
}


export default class UserTable {
  constructor(rows) {
      this.rows = rows;
      this.elem = createElementTable(this.rows);
      this.remove()
  } 
  
  remove() {
    let tr = this.elem.querySelectorAll('tr');
    tr.forEach(elem => elem.addEventListener('click', function(event) {
      if(event.target.tagName != 'BUTTON') return
      elem.remove()
    }))
  }
}

