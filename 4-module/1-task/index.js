/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList(friends) {
  let friendsList = '';

  friends.forEach(
      ({firstName,lastName}) => friendsList += `<li>${firstName} ${lastName}</li>`
    );

  let ul = document.createElement('ul');
  ul.innerHTML = friendsList;

  return ul 
}

