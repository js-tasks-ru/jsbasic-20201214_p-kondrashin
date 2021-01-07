/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let rows = Array.from(table.rows);

    rows.forEach(elem => { 

        for(let key of elem.children) { 
            if (key.textContent === 'm') {
                elem.classList.add('male')
            }
            else if (key.textContent === 'f'){
                elem.classList.add('female')  
            }
            else if (Number(key.textContent) < 18) {
                elem.style="text-decoration: line-through"
            } 
            else if (key.dataset.available == "true") {
                elem.classList.add('available')
            } 
            else if(key.dataset.available == "false") {
                elem.classList.add('unavailable')
            }
        } 
    });

    rows.forEach(elem => {
        if (!elem.classList.contains('unavailable') && !elem.classList.contains('available')) {
            elem.hidden = true
        }
    });
}


