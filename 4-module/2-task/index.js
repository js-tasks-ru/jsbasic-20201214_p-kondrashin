/**
 * @param {HTMLTableElement} table
 * @return {void}
 */

function makeDiagonalRed(table) {
    [...table.rows].forEach ((elem, index) => {
      elem.cells[index].style.background = 'red'
    });
}