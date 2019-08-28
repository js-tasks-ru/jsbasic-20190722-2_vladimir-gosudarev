/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let res = [];
    let arr = str.split(' ').join(',').split(',');
    for (let item of arr) {
        if (isFinite(item) && item !== '') {
        res.push(item);
        }
    }
    return {min: Math.min(...res), max: Math.max(...res)};
}
