/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
    let prop = 0;
    for (let key in obj) {
        prop++;
        return false
    }     
    console.log(prop);
    return true;
}
