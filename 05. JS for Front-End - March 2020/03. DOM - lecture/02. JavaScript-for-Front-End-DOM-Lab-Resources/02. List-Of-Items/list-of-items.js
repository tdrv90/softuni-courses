function addItem() {
    const items = document.querySelector("#items");
    const inputField = document.getElementById('newItemText');

    const newItem = document.createElement('li')
    newItem.innerText = inputField.value;
    items.appendChild(newItem);

    inputField.value = '';
}