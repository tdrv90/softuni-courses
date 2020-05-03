function solve() {
  const newEl = document.getElementById('newText').value;
  const listOfItems = document.getElementById('items');

  if (newEl.length === 0) return;

  const listItem = document.createElement('li');
  listItem.textContent = newEl;

  const removeEl = document.createElement('a');
  const linkText = document.createTextNode('[Delete]');
  removeEl.appendChild(linkText);
  removeEl.href = '#';
  removeEl.addEventListener('click', deleteItem);

  listItem.appendChild(removeEl);
  listOfItems.appendChild(listItem);

  function deleteItem() {
    listItem.remove();
  }
}