function solve() {
    let inputField = document.querySelector("#input");
    let button = document.querySelector("#container > button");

    button.addEventListener('click', () => {
        console.log(inputField.value);
    })
}