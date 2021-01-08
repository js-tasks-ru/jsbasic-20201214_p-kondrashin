/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList(friends) {
  let friendsList = '';

  function friendElementTemplate({firstName,lastName} = {}) {
    return friendsList += `<li>${firstName} ${lastName}</li>`
  }

  friends.forEach(
      ({firstName,lastName}) => friendElementTemplate({firstName,lastName})
  );

  let ul = document.createElement('ul');
  ul.innerHTML = friendsList;

  return ul 
}

