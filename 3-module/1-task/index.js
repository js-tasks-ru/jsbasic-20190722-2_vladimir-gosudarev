/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let result = [];
    for (let men of data) {
        if (men.age <= age)   {
            result.push(men.name + ', ' + men.balance);
        }
    }
    return result.join('\n');
}
