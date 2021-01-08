/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let i = 0; 

    [...table.rows].forEach (elem => {
        [...elem.cells].forEach (item => {
            if (item.cellIndex == i) {
                item.style.background ='red';
            }
        });

        i++
    });
}
