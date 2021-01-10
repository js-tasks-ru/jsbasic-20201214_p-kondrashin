/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList(friends) {
  let friendsList = '';

  function friendElementTemplate(firstName,lastName) {
    return `<li>${firstName} ${lastName}</li>`
  }

  friends.forEach(
      ({firstName,lastName}) => {
        friendsList += friendElementTemplate(firstName,lastName)
      }
  );

  let ul = document.createElement('ul');
  ul.innerHTML = friendsList;

  return ul 
}

