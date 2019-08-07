/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
    let newObj= {};

    if (!!obj === false) {
        console.log('null / undefined');
        return obj;
    }
    for (let key in obj) {
        newObj[key] = obj[key];  
        if (typeof(obj[key]) === 'object') {
            console.log('object');
            newObj[key] = clone(obj[key]);
        } 
    }
    return newObj;
}

