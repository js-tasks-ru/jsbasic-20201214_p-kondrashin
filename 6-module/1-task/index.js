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
export default class UserTable {
  constructor(rows) {
      this.rows = rows;
      this.elem = "";
  }
  
  render() {
    this.elem = template(cells);
    let cells = '';
    
    this.rows.forEach(elem => makeTempateCells(elem));

    function makeTempateCells({name, age, salary, city} = {elem}){
        cells += `<tr><td>${name}</td><td>${age}</td><td>${salary}</td><td>${city}</td><td><button>X</button></td></tr>`
    } 

    const template = function makeTemplateTable(string) {
      return `<table><thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody>${string}</tbody></table>`
    }
  }

}