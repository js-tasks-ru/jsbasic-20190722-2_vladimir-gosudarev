/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    const ul = document.createElement('ul');
    let listItems = '';
    for (friend of friends) {
        listItems += `<li>${friend.firstName} ${friend.lastName}</li> `;
    }
    ul.innerHTML = listItems;
    console.log(ul);
    return ul;
}


